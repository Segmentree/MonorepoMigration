import { VueElementConstructor } from "vue";

export const install = (Vue: any, components: Array<VueElementConstructor>) => {
  components.forEach((comp) => {
    Vue.component(comp.name, comp);
  });
};
