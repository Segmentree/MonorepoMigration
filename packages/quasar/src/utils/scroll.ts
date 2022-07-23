import { ref } from 'vue';
import { scroll } from 'quasar';
const { getScrollTarget, setVerticalScrollPosition } = scroll;

function maximumBottomScrollReached() {
  const documentHeight = document.body.scrollHeight;
  const currentScroll = window.scrollY + window.innerHeight;
  return currentScroll >= documentHeight;
}

export function scrollToHtmlElement(
  selector: string,
  duration = 1000,
  offsetGap = 0
) {
  const element: HTMLElement = document.querySelector(selector) as HTMLElement;
  if (element) {
    const target = getScrollTarget(element);
    const offset = element.offsetTop;
    setVerticalScrollPosition(target, offset - offsetGap, duration);
  }
}

export function scrollPercentage(selector: string, offset = 0) {
  const percentage = ref(0);

  window.addEventListener('scroll', () => {
    const element = document.querySelector(selector);
    if (element) {
      const el = element.getBoundingClientRect();
      const height = el.height;
      const elementBottomY = el.bottom - offset;

      if (elementBottomY < 0 || maximumBottomScrollReached())
        percentage.value = 100;
      else if (elementBottomY > height) percentage.value = 0;
      else percentage.value = (100 * (height - elementBottomY)) / height;
    }
  });

  return { percentage };
}
