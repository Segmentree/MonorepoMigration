<template>
  <div class="row justify-start q-py-md">
    <div class="q-mx-md">
      <div class="quote-separator">
        <div class="quotation-box-icon">
          <q-icon size="lg" :name="icon" />
        </div>
      </div>
    </div>

    <div class="col-10 row q-pa-md">
      <div>
        {{ quote }}
      </div>
      <div class="full-width row justify-end q-pt-xl text-grey-10">
        {{ author }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'QuotationBox',
  props: {
    author: String,
    icon: String,
    quote: String
  }
});
</script>
