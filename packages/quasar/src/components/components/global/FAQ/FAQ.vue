<template>
  <div class="section-padding row justify-center">
    <div class="col-12 col-md-11 col-lg-10 row justify-center">
      <div class="col-12 row justify-center items-center">
        <div
          :class="`col-11 col-md-9 row items-center ${
            $q.screen.lt.md ? 'text-left' : 'justify-center text-center'
          }`"
        >
          <div class="col-12 w-600 text-grey-14">
            <h2>{{ title }}</h2>
          </div>
        </div>
      </div>
      <div class="col-12 text-dark row justify-center q-mt-xl">
        <div class="col-12" v-for="(item, i) in localeItems" :key="i">
          <q-expansion-item :default-opened="i == 0" group="FAQ-Group">
            <template v-slot:header>
              <q-item-section class="w-600 q-py-md">
                <div class="t2">
                  <div v-if="!item.link">
                    {{ item.title }}
                  </div>
                  <a v-else class="faq-link" :href="item.link">
                    {{ item.title }}
                  </a>
                </div>
              </q-item-section>
            </template>

            <q-card>
              <q-card-section class="w-400">
                <div v-for="(obj, j) in item.content" :key="j">
                  <div class="t2" v-if="obj.type === 'paragraph'">
                    <p class="q-ma-none">
                      <span v-for="(sentence, k) in obj.info" :key="k">
                        {{ sentence.text }}
                        <span v-if="sentence.link_ref"
                          ><a class="faq-link" :href="sentence.link_ref">{{
                            sentence.link_text
                          }}</a></span
                        >
                      </span>
                    </p>
                    <br />
                  </div>
                  <div v-if="obj.type === 'list'" class="q-pa-md">
                    <q-list class="w-400">
                      <q-item
                        class="q-px-none"
                        v-for="(item, k) in obj.info"
                        :key="k"
                      >
                        <div class="full-width row">
                          <div class="col-12 t2">
                            <div class="row items-center">
                              <div
                                :class="`${
                                  $q.screen.lt.sm ? 'col-1' : ''
                                } row justify-center`"
                              >
                                <q-img :src="list_icon" style="width: 30px" />
                              </div>
                              <div class="col-11 q-pl-sm">
                                <div v-if="item.title_link">
                                  <a class="faq-link" :href="item.title_link">{{
                                    item.title
                                  }}</a>
                                </div>
                                <div v-else>
                                  {{ item.title }}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-12 q-py-md q-px-lg"
                            v-if="item.paragraph && item.paragraph.length > 0"
                          >
                            <div class="t2">
                              <p>
                                <span
                                  v-for="(sentence, k) in item.paragraph"
                                  :key="k"
                                >
                                  {{ sentence.text }}
                                  <span v-if="sentence.link_ref"
                                    ><a
                                      class="faq-link"
                                      :href="sentence.link_ref"
                                      >{{ sentence.link_text }}</a
                                    ></span
                                  >
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </q-item>
                    </q-list>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { ExpansionItem } from '../../../models/FAQ/FAQ';

export default defineComponent({
  name: 'FAQ',
  components: {},
  props: {
    title: { type: String },
    items: { type: (Array as unknown) as PropType<ExpansionItem[]> },
    list_icon: {
      type: String,
      default: '../svg/checkmark_icon.svg'
    }
  },
  setup(props) {
    const localeItems = computed(() =>
      props.items.filter((item) =>
        item.locale && item.locale.length
          ? item.locale.includes(root['$i18n'].locale)
          : true
      )
    );
    return { localeItems };
  }
});
</script>
