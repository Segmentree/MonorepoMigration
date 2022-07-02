<template>
  <div class="section row full-width justify-center">
    <div class="col-11 col-lg-10 row">
      <accountants-ligo-benefits
        class="col-12 col-md-6 col-lg-6"
        v-bind="benefits[0]"
      />
      <div class="col-12 col-md-6 col-lg-5">
        <accountants-more-questions
          :class="`${$q.screen.lt.md ? 'q-mt-md' : 'c-ml-100'}`"
          v-bind="contact[0]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  default as AccountantsLigoBenefits,
  AccountantsLigoBenefitsProps
} from './AccountantsLigoBenefits.vue';
import {
  default as AccountantsMoreQuestions,
  AccountantsMoreQuestionsProps
} from './AccountantsMoreQuestions.vue';

export default defineComponent({
  name: 'AccountantsBenefitsContact',
  components: {
    AccountantsLigoBenefits,
    AccountantsMoreQuestions
  },
  props: {
    benefits: {
      type: (Array as unknown) as PropType<AccountantsLigoBenefitsProps[]>,
      required: true
    },
    contact: {
      type: (Array as unknown) as PropType<AccountantsMoreQuestionsProps[]>,
      required: true
    }
  }
});
</script>
