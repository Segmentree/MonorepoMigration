import { ref } from 'vue';
import { useAwaitDOMNode } from '../../../tools';

const TOOLBAR_CONTAINER_ID = '#toolbar-first-element';
const TOOLBAR_ID = '#landing-toolbar';

export function getContainerWidth() {
  const width = ref(screen.width);

  useAwaitDOMNode([TOOLBAR_ID, TOOLBAR_CONTAINER_ID]).then(
    ([toolbar, toolbarFirstElement]) => {
      function calculateWidth() {
        const toolbarWidth = toolbar.getBoundingClientRect().width;
        const left = toolbarFirstElement.getBoundingClientRect().left;
        const paddingRight = parseFloat(
          window.getComputedStyle(toolbarFirstElement).paddingRight
        );
        width.value = toolbarWidth - (left + paddingRight);
      }
      calculateWidth();
      const resizeObserver = new ResizeObserver(() => {
        calculateWidth();
      });
      resizeObserver.observe(document.body);
    }
  );

  return { width };
}
