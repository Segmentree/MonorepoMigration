import { ref, Ref } from '@vue/composition-api';
import { useAwaitDOMNode } from './dom-mutation-observer';

const PRECISION = 0.005;

type Measures = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const refresh = (
  sensor: Ref<IntersectionObserver> | Ref<null>,
  root: HTMLElement,
  element: HTMLElement,
  measures: Ref<Measures>,
  callback: () => void,
  threshold = 1.0
) =>
  function onRefresh() {
    sensor.value?.disconnect();
    sensor.value = null;

    const rect = element.getBoundingClientRect();
    const scrollingElement = document.scrollingElement;
    const top = rect.top + scrollingElement.scrollTop;
    const left = rect.left + scrollingElement.scrollLeft;
    measures.value = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };

    if (!rect || !rect.width || !rect.height) return;

    callback();

    const rootMargin = [
      top,
      root.offsetWidth - (left + rect.width),
      root.offsetHeight - (top + rect.height),
      left
    ].reduce((res, item) => {
      return (res += `${-1 * Math.floor(item)}px `);
    }, '');

    const options = { root, rootMargin, threshold };

    sensor.value = new IntersectionObserver((entries) => {
      const uniqueEntrie = entries[0];
      if (Math.abs(threshold - uniqueEntrie.intersectionRatio) > PRECISION) {
        onRefresh();
      }
    }, options);

    sensor.value.observe(element);
  };

function movementObserver(
  element: HTMLElement,
  root: HTMLElement,
  measures: Ref<Measures>,
  callback: () => void
) {
  const sensor = ref(null);
  const onRefresh = refresh(sensor, root, element, measures, callback);
  onRefresh();

  return () => {
    sensor.value?.disconnect();
  };
}

function setupMovementDetector() {
  const root = document.documentElement;
  const measures = ref(null) as Ref<Measures>;
  const cleanUp = ref();
  const selectorNode = ref();

  return { cleanUp, selectorNode, root, measures };
}

function start({
  nodeToObserve,
  callback,
  cleanUp,
  selectorNode,
  root,
  measures
}) {
  selectorNode.value = nodeToObserve;
  cleanUp.value = movementObserver(
    selectorNode.value,
    root,
    measures,
    callback
  );
}

export function useMovementDetector(selector: string, callback: () => void);
export function useMovementDetector(
  selector: HTMLElement,
  callback: () => void
);

export function useMovementDetector(
  selector: any,
  callback = () => {
    return;
  }
) {
  const res = setupMovementDetector();

  if (typeof selector === 'string')
    useAwaitDOMNode([selector]).then(([node]) => {
      start({ nodeToObserve: node, callback, ...res });
    });
  else start({ nodeToObserve: selector, callback, ...res });

  return {
    cleanUp: res.cleanUp,
    measures: res.measures,
    selectorNode: res.selectorNode
  };
}
