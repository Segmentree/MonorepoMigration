import { useAwaitDOMNode } from "./dom-mutation-observer";
import { useMovementDetector } from "./movement-detection";

const LINE_NODE_ID = 'line-test-node';

const lineStyle = (left: number, color: string) => {
  const style = {
    height: '100vh',
    width: '1px',
    'background-color': `${color}`,
    position: 'fixed',
    left: `${left}px`,
    'z-index': '1000000',
  };
  return Object.keys(style).reduce((str, key) => {
    str += `${key}:${(style as any)[key]};`;
    return str;
  }, '');
  
};

function drawLine(node: HTMLElement, color = 'red') {
  const newElement = document.createElement('div');
  newElement.setAttribute('id', LINE_NODE_ID);
  newElement.style.cssText = lineStyle(
    node.getBoundingClientRect().left,
    color
  );
  document.body.insertAdjacentElement('afterbegin', newElement);
}

function guideLines(nodeA: HTMLElement, nodeB: HTMLElement) {
  document.querySelectorAll(`#${LINE_NODE_ID}`).forEach((n) => n.remove());
  drawLine(nodeA);
  drawLine(nodeB, 'yellow');
}

function init(nodeA: HTMLElement, nodeB: HTMLElement, gapSize: number) {
  const { cleanUp } = useMovementDetector(nodeA, callback);

  function callback() {
    const marginB = () => {
      const value = parseFloat(nodeB.style.marginRight);
      return Number.isNaN(value) ? 0.0 : value;
    };
    const xA = nodeA.getBoundingClientRect().left;
    const xB = nodeB.getBoundingClientRect().left;
    const diff = xB - xA;
    nodeB.style.marginRight = `${marginB() + diff + gapSize}px`;
  }

  const useGuideLines = () => {
    guideLines(nodeA, nodeB);
  };

  return { useGuideLines, cleanUp };
}

export function useAlignTwoElements(
  selectorA: string,
  selectorB: string,
  gapSize: number
);
export function useAlignTwoElements(
  selectorA: HTMLElement,
  selectorB: HTMLElement,
  gapSize: number
);

export function useAlignTwoElements(
  selectorA: any,
  selectorB: any,
  gapSize = 0
) {
  return new Promise((resolve) => {
    if (typeof selectorA === 'string')
      useAwaitDOMNode([selectorA, selectorB]).then(([nodeA, nodeB]) => {
        resolve(init(nodeA, nodeB, gapSize));
      });
    else resolve(init(selectorA, selectorB, gapSize));
  });
}
