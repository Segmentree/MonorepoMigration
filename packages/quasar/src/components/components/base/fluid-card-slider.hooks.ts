import { computed, nextTick, onMounted, ref, Ref, watch } from 'vue';

// Percent cards
const HUNDRED_PERCENT = 10;
const NINETY_SIX_PERCENT = 9.6;

// Percent of the containers
const FOUR_PERCENT = 0.04;
const TWO_PERCENT = 0.02;

// The type of the array used into fluid-card-slider component
type sliderArrayItem = {
  val: any;
  id: number;
};

// Create a new array repeating the original array three times consecutively with the object to obtain a cyclic array
function createCyclicArray(array: Array<any>): sliderArrayItem[] {
  return [...array, ...array, ...array].map((item, index) => ({
    val: item,
    id: index,
  }));
}

// The start index should be (originalArray.length + totalCardsPerSlide + 1) % cyclicArrayLength
// The start index refers to the first card next to current slide
// Note that the current slide includes the card previous to the first card of the slide and the card next to the last card of the slide
// But this extremes can be showed as a little part of the card or not showed at all
function getStartIndex(
  itemsLength: number,
  cardsPerSlide: number,
  cyclicArrLength: number
) {
  return (itemsLength + cardsPerSlide) % cyclicArrLength;
}

export function setupSlider(
  items: Array<any>,
  cardsPerSlide: number,
  cyclic: boolean
) {
  // Creating the cyclicArray and the currentSlideArray
  const cyclicArr: Ref<sliderArrayItem[]> = ref(createCyclicArray(items));
  const cards: Ref<sliderArrayItem[]> = ref(
    cyclicArr.value.slice(items.length - 1, 2 * items.length)
  );

  // Declaring number references
  // size the cyclicArray length
  // start reference to element next to the first slide
  // index reference to element next to the current slide
  // onCard width in percent of a one card
  // height is the maxHeight among all cards (not tonly the current slide but all posible cards)
  // currentCardsPerSlide is a referents of the current among of cards in one slide
  const size = ref(cyclicArr.value.length);
  const start = ref(
    getStartIndex(items.length, cardsPerSlide, cyclicArr.value.length)
  );
  const index = ref(start.value);
  const containerWidth = ref(0);
  const oneCard = ref(0);
  const height = ref(0);
  const currentCardsPerSlide = ref(cardsPerSlide);

  // Declare boolean references
  // outLeft a boolean reference to indicate if activate the left animation or the rigth animation
  // limitleft indicate if the left limit is reached if the slider is not cyclic
  // limitRight indicate if the right limit is reached if the slider is not cyclic
  // loading indicate when the elements are ready to use
  // calculateHeight indicate if obtains the bigger height amount all cards is needed
  const outLeft = ref(false);
  const limitLeft = ref(!cyclic);
  const limitRight = ref(!cyclic && start.value % items.length === 1);
  const loading = ref(true);
  const calculateHeight = ref(true);

  // Declare components references
  const sliderContainer = ref();
  const cardsRef = ref();

  // When the DOM is ready init is called
  // init is called twice one for calculate the max height
  // and other to render the correct amount of cards per slide
  onMounted(() => {
    init();
    nextTick(() => {
      loading.value = true;
      cards.value = cyclicArr.value.slice(
        items.length - 1,
        items.length + cardsPerSlide
      );
      init();
    });
  });

  // Return what percent of a card will be rendered
  const width = computed(() => {
    if (limitRight.value && limitLeft.value)
      return oneCard.value * HUNDRED_PERCENT;
    return oneCard.value * NINETY_SIX_PERCENT;
  });

  // The overflow is to show a small part of the previous card and a small part of the next card
  const overflow = computed(() => {
    if (limitRight.value && limitLeft.value) {
      return -1 * oneCard.value * HUNDRED_PERCENT;
    }
    if (limitRight.value)
      return (
        -1 *
        (oneCard.value * NINETY_SIX_PERCENT -
          containerWidth.value * FOUR_PERCENT)
      );
    if (limitLeft.value) return -1 * oneCard.value * NINETY_SIX_PERCENT;
    return (
      -1 *
      (oneCard.value * NINETY_SIX_PERCENT - containerWidth.value * TWO_PERCENT)
    );
  });

  // If loading is false and calculateHeight is true iterates over all the cards
  // and get the bigger height
  watch(loading, (newVal) => {
    if (!newVal && calculateHeight.value) {
      nextTick(() => {
        cardsRef.value.forEach((element: any) => {
          height.value = Math.max(
            parseFloat(element.offsetHeight),
            height.value
          );
        });
      });
    }
  });

  // Init function get the current width of the container and calculate the respective width of the one card
  function init() {
    loading.value = true;
    nextTick(() => {
      containerWidth.value = sliderContainer.value.offsetWidth;
      oneCard.value =
        containerWidth.value / (10 * (currentCardsPerSlide.value - 1));
      loading.value = false;
    });
  }

  // Get positive and negative modules
  function mod(num: number) {
    return (num + size.value) % size.value;
  }

  // Check if some limit is reached
  function position() {
    if (cyclic) return;
    limitLeft.value = index.value === start.value;
    limitRight.value = index.value % items.length === 1;
  }

  // Slide one card to the right
  function right() {
    outLeft.value = true;
    nextTick(() => {
      outLeft.value = false;
      cards.value.splice(0, 1);
      cards.value.push(cyclicArr.value[index.value]);
      index.value = mod(index.value + 1);
      position();
    });
  }

  // Slide one card to the left
  function left() {
    cards.value.splice(cards.value.length - 1, 1);
    cards.value.unshift(
      cyclicArr.value[mod(index.value - currentCardsPerSlide.value - 2)]
    );
    index.value = mod(index.value - 1);
    position();
  }

  // Function to conditional or external reset the slider parameters and logic to the beginning state
  function reset(newCardsPerSlide: any, recalculateHeight = true) {
    currentCardsPerSlide.value = newCardsPerSlide;
    start.value = getStartIndex(
      items.length,
      currentCardsPerSlide.value,
      cyclicArr.value.length
    );
    index.value = start.value;
    limitLeft.value = !cyclic;
    limitRight.value = !cyclic && start.value % items.length === 1;
    height.value = 0;
    calculateHeight.value = recalculateHeight;
    cards.value = cyclicArr.value.slice(
      items.length - 1,
      items.length + currentCardsPerSlide.value
    );
    init();
  }

  // Reset the slider on resize event
  window.addEventListener('resize', () => {
    reset(currentCardsPerSlide.value, calculateHeight.value);
  });

  return {
    height,
    loading,
    overflow,
    cards,
    outLeft,
    width,
    left,
    right,
    sliderContainer,
    cardsRef,
    reset,
  };
}
