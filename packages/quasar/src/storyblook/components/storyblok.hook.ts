import { ref, watch, toRef, onMounted, Ref } from 'vue';
import { forcedLanguage } from '../../utils';

export function getURLsDictionary(root: any) {
  return {
    EN: root['$alias'].reverseEnDictionary,
    NL: root['$alias'].enDictionary
  };
}

export function useStoryblok(
  name: Ref<string>,
  root: any,
  emit: any,
  locale: Ref<string>
) {
  const story = ref();
  const key = ref(0);

  function getStory(slug: string, version: string) {
    emit('footer-loading', true);
    const url = root['$alias'].enDictionary[slug]
      ? root['$alias'].enDictionary[slug]
      : root['$alias'].nlDictionary[slug]
      ? root['$alias'].nlDictionary[slug]
      : slug;
    return root['$storyapi']
      .get('cdn/stories/' + url + '?language=' + locale.value, {
        version
      })
      .then((response) => {
        story.value = response.data.story;
        key.value += 1;
        forcedLanguage(
          root,
          response?.data?.story?.content?.forcedLocale,
          response?.data?.story?.content?.forcedLocaleUrl,
          emit
        );
      })
      .catch((error: any) => {
        console.log(error);
        root.$router.push({ name: '404' });
      })
      .finally(() => {
        emit('footer-loading', false);
      });
  }

  function detectContext() {
    if (window.storyblok.isInEditor()) {
      getStory(name.value, 'draft');
    } else {
      getStory(name.value, 'published');
    }
  }

  onMounted(() => {
    window.storyblok.on('change', () => {
      getStory(name.value, 'draft');
    });
    window.storyblok.pingEditor(() => {
      detectContext();
    });
  });

  watch([locale, name], () => {
    detectContext();
  });

  return { story, key };
}
