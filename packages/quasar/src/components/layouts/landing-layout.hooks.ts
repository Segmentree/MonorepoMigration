import { ref } from 'vue';

const EN = ['en'];
const NL = ['nl'];

export function setMaskURL(
  locale: string,
  curPath: string,
  urlDictionary: any
) {
  const query = new URL(window.location.href).search;
  if (curPath.slice(-1) === '/') curPath = curPath.slice(0, -1);
  if (curPath[0] === '/') curPath = curPath.slice(1);
  if (curPath.length >= 2 && EN.includes(curPath.slice(0, 2))) {
    curPath = curPath.slice(3);
  }
  const key = curPath;
  let newPath = EN.includes(locale) ? '/' + EN[0] + '/' : '/';
  if (EN.includes(locale) && urlDictionary.EN[key]) {
    newPath += urlDictionary.EN[key];
  } else if (NL.includes(locale) && urlDictionary.NL[key]) {
    newPath += urlDictionary.NL[key];
  } else newPath += key;
  window.history.replaceState('', '', newPath + query);
}

export const useDrawerConfig = () => {
  const WIDTH_BREAKPOINT = 600;
  const drawerSwitch = ref(false);
  return { breakpoint: ref(WIDTH_BREAKPOINT), drawerSwitch };
};
