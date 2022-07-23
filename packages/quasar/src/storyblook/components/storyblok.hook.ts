import { ref, watch, onMounted, Ref } from 'vue';
import { Composer, useI18n } from 'vue-i18n';
import { Router } from 'vue-router';
import { forcedLanguage } from '../../utils';

export function getURLsDictionary() {
  return {
    // EN: root['$alias'].reverseEnDictionary,
    // NL: root['$alias'].enDictionary
  };
}

export function useStoryblok(
  name: Ref<string>,
  router: Router,
  emit: any,
  locale: Ref<string>
) {
  const story = ref();
  const key = ref(0);
  const i18n = useI18n() as Composer

  function getStory(slug: string, version: string) {
    emit('footer-loading', true);
    // const url = root['$alias'].enDictionary[slug]
    //   ? root['$alias'].enDictionary[slug]
    //   : root['$alias'].nlDictionary[slug]
    //   ? root['$alias'].nlDictionary[slug]
    //   : slug;
    const url = slug
    return root['$storyapi']
      .get('cdn/stories/' + url + '?language=' + locale.value, {
        version
      })
      .then((response: any) => {
        story.value = response.data.story;
        key.value += 1;
        forcedLanguage(
          response?.data?.story?.content?.forcedLocale,
          i18n,
          emit,
          response?.data?.story?.content?.forcedLocaleUrl,
        );
      })
      .catch((error: any) => {
        console.log(error);
        router.push({ name: '404' });
      })
      .finally(() => {
        emit('footer-loading', false);
      });
  }

  function detectContext() {
    if ((window as any).storyblok.isInEditor()) {
      getStory(name.value, 'draft');
    } else {
      getStory(name.value, 'published');
    }
  }

  onMounted(() => {
    (window as any).storyblok.on('change', () => {
      getStory(name.value, 'draft');
    });
    (window as any).storyblok.pingEditor(() => {
      detectContext();
    });
  });

  watch([locale, name], () => {
    detectContext();
  });

  return { story, key };
}
