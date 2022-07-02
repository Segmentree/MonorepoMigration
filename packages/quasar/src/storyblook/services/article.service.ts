import { ref, Ref } from 'vue';
import { blokApiService, blokApiFilteringService } from './';
import { Dictionary } from '@ligo/shared/utils';
import { RESOURCES } from './resources';
import { Story } from '../models';

export function getStoryblokArticles<T>() {
  const loading = ref(true);
  const articles = ref([]) as Ref<Story<T>[]>;
  blokApiService
    .getList<T>(RESOURCES.ARTICLES)
    .then((res) => {
      articles.value = res;
    })
    .catch((err) => {
      console.log(
        'There was an error retriving articles from stroryblok api : ',
        err
      );
    })
    .finally(() => {
      loading.value = false;
    });
  return { loading, articles };
}

export function filterByWordAllDocument<T>(word: string) {
  const loading = ref(true);
  const filteredResult = ref([]) as Ref<Dictionary[]>;
  blokApiFilteringService
    .filter(RESOURCES.ARTICLES, word)
    .then((response) => {
      filteredResult.value = response;
    })
    .catch((err) => {
      console.log(
        'There was an error attempting to filter all articles content by word : ',
        err
      );
    })
    .finally(() => {
      loading.value = false;
    });

  return { loading, filteredResult };
}

export function filterArticlesByAuthorName<T>(
  name: string,
  fieldName = 'authorName',
  component = 'ArticleBanner'
) {
  const loading = ref(true);
  const filteredResult = ref([]) as Ref<Story<T>[]>;
  blokApiFilteringService
    .filterBySpecificField<T>(RESOURCES.ARTICLES, fieldName, component, [name])
    .then((response) => {
      filteredResult.value = response;
    })
    .catch((err) => {
      console.log(
        'There was an error attempting to filter articles by author: ',
        err
      );
    })
    .finally(() => {
      loading.value = false;
    });

  return { loading, filteredResult };
}

export function filterArticlesByTags<T>(
  tags: string[],
  fieldName = 'tag',
  component = 'ArticleBanner'
) {
  const loading = ref(true);
  const filteredResult = ref([]) as Ref<Story<T>[]>;
  blokApiFilteringService
    .filterBySpecificField<T>(RESOURCES.ARTICLES, fieldName, component, tags)
    .then((response) => {
      filteredResult.value = response;
    })
    .catch((err) => {
      console.log(
        'There was an error attempting to filter articles by tags: ',
        err
      );
    })
    .finally(() => {
      loading.value = false;
    });
  return { loading, filteredResult };
}
