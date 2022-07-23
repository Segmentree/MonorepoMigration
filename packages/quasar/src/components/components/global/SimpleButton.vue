<template>
  <div>
    <q-form v-if="emit" :action="buttonLink" method="post">
      <q-btn
        :class="customClass"
        no-caps
        :dense="dense"
        type="submit"
        :color="buttonColor"
        :label="buttonText"
        :text-color="textColor"
      />
    </q-form>
    <a v-else-if="external" :href="buttonLink">
      <q-btn
        :dense="dense"
        :class="customClass"
        no-caps
        :color="buttonColor"
        :label="buttonText"
        :text-color="textColor"
      />
    </a>
    <router-link v-else :to="buttonLink">
      <q-btn
        :class="customClass"
        :dense="dense"
        no-caps
        :color="buttonColor"
        :label="buttonText"
        :text-color="textColor"
      />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SimpleButton',
  props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    },
    buttonColor: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      defaultd: 'white'
    },
    emit: {
      type: Boolean,
      required: true
    },
    external: {
      type: Boolean,
      required: true
    },
    customClass: {
      type: String,
      default: 'c-minw-250'
    },
    dense: {
      type: Boolean,
      default: false
    }
  }
});
</script>
