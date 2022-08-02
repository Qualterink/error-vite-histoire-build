// @ts-nocheck
import { defineSetupVue3 } from "histoire/client";

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.config.globalProperties.eventBus = 'my-event-bus';
  app.config.globalProperties.$t = (str) => 'i18n.global.t(str)';
});
