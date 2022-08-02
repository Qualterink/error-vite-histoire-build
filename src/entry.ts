import type { App } from "vue";

import * as vueComponents from "@/lib-components/index";
import externalVueConfig from "@/externalVueConfig";
import type { externalVueConfigI } from "@/externalVueConfig";

// install function executed by Vue.use()
const PixelVueSharedInstall: any = function installPixelVueShared(Vue: App) {
  Object.entries(vueComponents).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};
export { PixelVueSharedInstall };


// To allow individual component use, export components
// each can be registered via Vue.component()
export * from "@/lib-components/index";

export {
  externalVueConfigI,
};

/**
 * export external vue config
 */
export { externalVueConfig };

