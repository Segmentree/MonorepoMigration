<template>
  <div class="drawer-content">
    <div class="text-white font-18 w-600">
      <q-list>
        <q-item v-for="(item, i) in items" :key="`item-a-${i}`">
          <div v-if="item.link" class="q-mt-md">
            <span>
              <a class="border-radius-10 q-ml-lg" :href="item.link">
                {{ item.name }}
              </a>
            </span>
          </div>
          <div v-else class="q-mt-md cursor-pointer">
            <span class="q-ml-lg" @click="onExpanItemClick(item, !item.active)">
              {{ item.name }}
            </span>
            <span>
              <q-icon
                :class="`rotate-from-${!item.active ? 'right' : 'down'}`"
                size="sm"
                :name="`mdi-chevron-${item.active ? 'right' : 'down'}`"
              />
            </span>
          </div>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { ToolbarConfig } from '../../../models/index';

export default defineComponent({
  name: 'DrawerContentTablet',
  props: {
    config: {
      type: Object as PropType<ToolbarConfig>,
      required: true
    }
  },
  setup(props) {
    const items = props.config.items.map((item) => ({
      ...item,
      active: false
    }));

    function onExpanItemClick(item, newValue: boolean) {
      this.items.forEach((item) => (item.active = false));
      item.active = newValue;
      this.$emit('on-open-submenu', item);
    }

    return { items, onExpanItemClick };
  }
});
</script>
