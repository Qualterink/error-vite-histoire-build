declare module "vue/types/vue" {
  import Vue from "vue";

  interface App extends Vue {
    config?: any;
  }
}
