<template>
  <q-card
    :class="`shadow-2 q-pt-md q-pb-xl full-height membership-card ${
      complete ? 'bg-dark' : ''
    }`"
  >
    <q-card-section
      :class="`text-center q-pb-none q-pt-lg text-${
        complete ? 'white' : 'dark'
      } w-600`"
    >
      <div class="col-12 row justify-center">
        <div>
          <h4>{{ type }}</h4>
        </div>
        <div v-if="discount" class="q-ml-sm">
          <q-btn unelevated dense color="orange" class="text-white q-px-xs">
            {{ discount }}
          </q-btn>
        </div>
      </div>
      <div
        :class="`font-28 col-12 ${
          highlight_price ? 'text-orange' : ''
        } row justify-center items-center`"
      >
        <div
          v-if="old_price"
          :class="`q-mr-sm font-22 w-500 text-${complete ? 'white' : 'dark'}`"
          style="text-decoration: line-through"
        >
          {{ old_price }}
        </div>
        <div>
          {{ price }}
        </div>
      </div>
    </q-card-section>
    <q-card-section
      :class="`text-center q-pt-none text-${
        complete ? 'blue' : 'purple'
      } t2 w-400`"
    >
      {{ days }}
    </q-card-section>
    <q-card-section
      :class="`t2 w-400 q-pt-none q-pb-xl text-${
        complete ? 'white' : 'grey-5'
      }`"
    >
      <q-list>
        <q-item
          v-for="(item, i) in items"
          :key="i"
          class="q-px-none q-py-none membership-card-item"
        >
          <div
            class="row justify-center items-center full-width"
            :style="`${!item.active && 'opacity: 0.4'}`"
          >
            <div class="col-1">
              <q-img
                :src="item.icon && item.icon.filename"
                style="width: 15px"
              />
            </div>
            <div
              :class="`${!item.tip && $q.screen.gt.sm ? 'col-10' : 'col-9'}`"
            >
              <span
                v-if="
                  item.append &&
                  item.append[0] &&
                  !item.append[0].append_back_or_front
                "
                class="q-pr-xs text-orange"
              >
                {{ item.append[0].price ? item.append[0].price : '' }}
              </span>
              {{ item.text }}
              <span
                v-if="
                  item.append &&
                  item.append[0] &&
                  item.append[0].append_back_or_front
                "
                class="text-orange"
              >
                {{ item.append[0].price ? item.append[0].price : '' }}
                <span v-if="item.append[0].discount">
                  <q-btn
                    unelevated
                    dense
                    color="orange"
                    class="text-white q-px-xs"
                  >
                    {{ item.append[0].discount }}
                  </q-btn>
                </span>
              </span>
            </div>
            <tooltip
              v-if="item.tip && $q.screen.gt.sm"
              class="col-1"
              :icon="`img:/icons/info_${complete ? 'dark' : 'light'}.svg`"
              :tip="item.tip"
            />
          </div>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions class="absolute-bottom justify-center q-pa-lg">
      <q-form v-if="post" :action="customLink" method="post">
        <base-button type="submit" no-caps bg="primary" :text="btn" />
      </q-form>
      <base-button
        v-else
        no-caps
        bg="primary"
        :text="btn"
        @btn-click="onStart"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MembershipCardList } from '@ligo/shared/models';
import Tooltip from '../tooltip/Tooltip.vue';

export default defineComponent({
  name: 'MembershipCard',
  components: { Tooltip },
  props: {
    type: String,
    price: String,
    old_price: String,
    discount: String,
    highlight_price: Boolean,
    days: String,
    complete: Boolean,
    items: {
      type: (Array as unknown) as PropType<Array<MembershipCardList>>,
      required: true
    },
    btn: String,
    customLink: String,
    post: Boolean
  },
  methods: {
    onStart() {
      const url = this.customLink || 'https://app.ligo.nl/';
      window.location.assign(url);
    }
  }
});
</script>
