import { computed, ref, Ref } from 'vue';
import { PricingTableSection, PricingTableHead } from '../../../models';

let index: Ref<number>;
let maxSlides: Ref<number>;
let dynamicHeaders: Ref<PricingTableHead[]>;
let dynamicSections: Ref<PricingTableSection[]>;

function getSlides(root: any, size: number) {
  if (root.$q.screen.gt.sm) return Math.ceil(size / 4);
  if (root.$q.screen.gt.xs) return Math.ceil(size / 2);
  return size;
}

function arrayGroup(originalArray: Array<any>, subarraySize: number) {
  const size = Math.ceil(originalArray.length / subarraySize);
  return new Array(size)
    .fill([])
    .map((_, i) =>
      originalArray.slice(i * subarraySize, (i + 1) * subarraySize)
    );
}

function breakpointFilter(root: any, array: Array<any>, index: number) {
  if (root.$q.screen.gt.sm) return arrayGroup(array, 4)[index];
  if (root.$q.screen.gt.xs) return arrayGroup(array, 2)[index];
  return arrayGroup(array, 1)[index];
}

export const useData = (
  root: any,
  sections: PricingTableSection[],
  headers: PricingTableHead[]
) => {
  index = ref(0);
  maxSlides = ref(headers.length);
  dynamicSections = computed(() => {
    return sections.map((section) => ({
      label: section.label,
      icon: section.icon,
      rows: section.rows.map((row, i) => ({
        label: row.label,
        tooltip: row.tooltip,
        color: i % 2 === 0 ? 'grey-3' : 'white',
        columns: breakpointFilter(
          root,
          row.columns.map((col) => {
            const obj = col.value[0];
            const keys = Object.keys(obj);
            let result: { type: string; value: number | string };
            if (keys.includes('text'))
              result = { type: 'text', value: obj.text };
            else if (keys.includes('number'))
              result = { type: 'number', value: obj.number };
            else result = { type: 'categories', value: obj.categories };
            return { printableValue: result };
          }),
          index.value
        )
      }))
    }));
  });
  dynamicHeaders = computed(() => {
    return breakpointFilter(root, headers, index.value);
  });
  const slides = computed(() => {
    return getSlides(root, maxSlides.value);
  });
  return { dynamicSections, dynamicHeaders, index, slides };
};

export const tools = (root: any, columns: number) => {
  const slideDirection = ref(true);
  const showSlide = ref(true);
  const dynamicCol = computed(() => {
    if (root.$q.screen.gt.sm) return 100 / Math.min(5, columns);
    if (root.$q.screen.gt.xs) return 100 / Math.min(3, columns);
    return 50;
  });

  function excecuteSlide(fn: any) {
    return function (...args: any[]) {
      try {
        showSlide.value = false;
        fn.apply(this, args);
        root.$nextTick(() => {
          showSlide.value = true;
        });
      } catch (e) {
        console.log(
          'There was an error : ',
          e,
          ' traying to execute the function : ',
          fn,
          ' inside executeSlide method '
        );
      }
    };
  }

  const prevSlide = excecuteSlide(() => {
    slideDirection.value = false;
    index.value = Math.max(0, index.value - 1);
  });
  const nextSlide = excecuteSlide(() => {
    slideDirection.value = true;
    index.value = Math.min(
      getSlides(root, maxSlides.value) - 1,
      index.value + 1
    );
  });
  const slideByHand = excecuteSlide((newIndex: number) => {
    slideDirection.value = index.value < newIndex;
    index.value = newIndex;
  });
  return {
    dynamicCol,
    prevSlide,
    nextSlide,
    slideByHand,
    slideDirection,
    showSlide
  };
};
