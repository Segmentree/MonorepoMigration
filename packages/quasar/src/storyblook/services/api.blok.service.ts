import Vue from 'vue';
import { ApiResponseList, Story } from '../models';

function methodGet<T>(url: string, query = ''): Promise<T> {
  return Vue['$storyapi'].get<T>(`${url}${query}`);
}

export const blokApiService = {
  get: methodGet,
  getList<T>(url: string, query = ''): Promise<Story<T>[]> {
    return methodGet<ApiResponseList<T>>(url, query).then((result) => {
      return result.data.stories;
    });
  }
};
