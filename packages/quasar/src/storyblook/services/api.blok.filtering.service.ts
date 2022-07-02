import { Dictionary } from '@ligo/shared/utils';
import { ApiResponseList, Story } from '../models';
import { blokApiService } from './api.blok.service';

function isObject<T>(obj: T) {
  return typeof obj === 'object' && obj !== null;
}

function flatteningEngine<T>(obj: T, keys: string[] = []) {
  const flattenObject: Dictionary = {};
  for (const key in obj) {
    if (isObject(obj[key])) {
      const value = flatteningEngine(obj[key], keys);
      if (value)
        Object.keys(value).forEach(
          (k) => (flattenObject[`${key}.${k}`] = value[k])
        );
    } else if (!keys.length || keys.includes(key)) {
      flattenObject[key] = obj[key];
    }
  }
  return flattenObject;
}

function includesSubstring(list: string[], pattern: string) {
  return list.some((element) => pattern.toLowerCase().includes(element));
}

function accessWithArrayKeys(keys: string[], object: Dictionary) {
  return keys.reduce((value, key) => {
    return value && value[key];
  }, object);
}

export const blokApiFilteringService = {
  filter<T>(url: string, search: string, query = ''): Promise<Dictionary[]> {
    return blokApiService
      .get<ApiResponseList<T>>(url, query)
      .then((response) => {
        const document = response.data.stories.map((story) => {
          return flatteningEngine(story);
        });

        const filteredResponse = document.filter((flattenStory) => {
          for (const key in flattenStory) {
            if (
              typeof flattenStory[key] === 'string' &&
              flattenStory[key].includes(search)
            )
              return true;
          }
          return false;
        });

        return filteredResponse;
      });
  },

  filterBySpecificField<T>(
    url: string,
    path: string,
    bodyComponent: string,
    search: string[],
    query = ''
  ): Promise<Story<T>[]> {
    const keys = path.split('.');
    search = search.map((word) => word.toLowerCase());
    return blokApiService
      .get<ApiResponseList<T>>(url, query)
      .then((response) => {
        const filteredResponse = response.data.stories.filter((story) => {
          return story.content.body.some((storyComponent) => {
            if (storyComponent.component !== bodyComponent) return false;

            const fieldData = accessWithArrayKeys(keys, storyComponent);
            if (!fieldData) return false;

            if (Array.isArray(fieldData))
              return fieldData.some(
                (value) =>
                  typeof value === 'string' && includesSubstring(search, value)
              );
            else return includesSubstring(search, fieldData);
          });
        });

        return filteredResponse;
      });
  }
};
