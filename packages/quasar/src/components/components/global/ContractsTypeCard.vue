<template>
  <q-item class="shadow-1 rounded-borders" clickable @click="navigate">
    <q-card-section horizontal class="row full-width full-height">
      <q-card-section class="col-9 col-lg-10 font-16 w-400">
        {{ object.title }}
      </q-card-section>
      <q-separator vertical />
      <q-card-section
        class="col-3 col-lg-2 q-px-none font-16 w-600 text-primary text-center"
      >
        {{ object.price }}
      </q-card-section>
    </q-card-section>
    <form
      ref="postForm"
      v-if="object.post"
      :action="object.url"
      method="post"
    />
  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ContractType } from '../../models';

export default defineComponent({
  name: 'ContractsTypeCard',
  props: {
    object: (Object as unknown) as PropType<ContractType>
  },
  methods: {
    navigate() {
      if (this.object.url) {
        if (this.object.post) {
          this.$refs.postForm.submit();
        } else {
          if (this.object.external) window.location = this.object.url;
          else this.$router.push(this.object.url);
        }
      }
    }
  }
});
</script>
