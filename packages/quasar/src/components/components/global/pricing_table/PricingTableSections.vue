<template>
  <div>
    <div
      v-for="(section, i) in sections"
      :key="'section-' + i"
      class="t3 w-600"
      :style="`${i === 0 && 'margin-top: -60px'}`"
    >
      <div class="q-py-md row items-center">
        <img
          v-if="section.icon"
          class="q-px-sm table-section-icon"
          :src="section.icon.filename"
        />
        {{ section.label }}
      </div>
      <div
        v-for="(row, j) in section.rows"
        :key="'row-' + j"
        class="row t3 w-400"
      >
        <div :style="`width: ${col}%;`">
          <div
            :class="`bg-${row.color} q-pa-md table-left-radius row items-center`"
          >
            <div class="col">{{ row.label }}</div>
            <tooltip
              v-if="row.tooltip"
              class="col-2 pricing-table-tooltip"
              icon="img:/icons/info_icon.png"
              :tip="row.tooltip"
              size="10px"
            />
          </div>
        </div>
        <div
          v-for="(column, k) in row.columns"
          :key="'col-' + k"
          :style="`width: ${col}%;`"
        >
          <div
            :class="`q-pl-${$q.screen.gt.sm && 'xs'} ${
              slideDir ? 'slide-right' : 'slide-left'
            } full-height`"
          >
            <div
              :class="`bg-${
                row.color
              } q-pa-md full-height row items-center justify-center ${
                k === row.columns.length - 1 && 'table-right-radius'
              }`"
            >
              <div v-if="column.printableValue.type === 'number'">
                {{ column.printableValue.value }}
              </div>
              <div
                v-else-if="column.printableValue.type === 'text'"
                class="text-warning"
              >
                {{ column.printableValue.value }}
              </div>
              <div v-else>
                <q-icon
                  :color="
                    column.printableValue.value === 'included'
                      ? 'warning'
                      : 'grey-5'
                  "
                  :name="
                    column.printableValue.value === 'included'
                      ? 'mdi-circle'
                      : 'mdi-minus'
                  "
                  :size="
                    column.printableValue.value === 'included' ? '12px' : '20px'
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PricingTableSection } from '../../../models';
import Tooltip from '../tooltip/Tooltip.vue';

export default defineComponent({
  name: 'PricingTableSections',
  components: { Tooltip },
  props: {
    col: Number,
    sections: (Array as unknown) as PropType<PricingTableSection[]>,
    slideDir: Boolean
  }
});
</script>
