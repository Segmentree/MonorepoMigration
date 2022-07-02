import { useAwaitDOMNode } from "./dom-mutation-observer";

export function runCallbackOnResize(
  selector: string,
  callback: (param: any) => void
) {
  return useAwaitDOMNode([selector]).then(([node]) => {
    const observer = new ResizeObserver(() => callback(node));
    callback(node);
    observer.observe(node);
  });
}
