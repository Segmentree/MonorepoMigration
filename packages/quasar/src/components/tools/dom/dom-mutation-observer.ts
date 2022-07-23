import { ref, Ref } from '@vue/composition-api';

type PromiseResponse = (value: HTMLElement[]) => void;

const GLOBAL_NODE = document.body;

const checkNodes = (resolve: Ref<PromiseResponse>, selector: Array<string>) =>
  function () {
    const nodes: HTMLElement[] = [];
    let allNodesExist = true;
    selector.forEach((tag) => {
      const element: HTMLElement = document.querySelector(tag);
      if (!element) {
        allNodesExist = false;
        return;
      }
      nodes.push(element);
    });
    if (allNodesExist) resolve.value(nodes);
  };

export function useReactiveDOM(callback: () => void, node?: string) {
  const config = { attributes: true, childList: true, subtree: true };

  const observer = new MutationObserver(callback);
  observer.observe(!node ? GLOBAL_NODE : document.querySelector(node), config);
}

export function useAwaitDOMNode(selector: Array<string>) {
  return new Promise<HTMLElement[]>((resolve) => {
    checkNodes(ref(resolve), selector);
    useReactiveDOM(checkNodes(ref(resolve), selector));
  });
}
