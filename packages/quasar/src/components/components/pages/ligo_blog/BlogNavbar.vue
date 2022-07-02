<template>
  <div class="row flex-center">
    <div
      class="col-12 col-sm-9 row w-600 font-12 text-grey-2 justify-between q-py-md q-px-sm"
    >
      <div
        v-for="(navbarLink, i) in navbarLinks"
        :key="`link-${i}`"
        :class="{ 'text-primary': highLightLink(navbarLink.slug) }"
      >
        <a v-if="navbarLink.external" class="col" :href="navbarLink.link">
          <span v-text="navbarLink.text" />
        </a>
        <router-link v-else class="col" :to="navbarLink.link">
          <span v-text="navbarLink.text" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRoute } from 'vue-router';
import { NavbarLink } from '../../../models/ligo_blog/navbar-link';

export default defineComponent({
  name: 'BlogNavbar',
  props: {
    navbarLinks: {
      type: Array as PropType<NavbarLink[]>,
      required: true
    }
  },
  setup() {
    const route = useRoute() 
    function highLightLink(linkSlug: string) {
      if (route.params.slug == linkSlug) return true;
      return false;
    }

    return {
      highLightLink
    };
  }
});
</script>
