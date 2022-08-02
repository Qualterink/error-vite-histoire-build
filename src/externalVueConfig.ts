import type { App } from "vue";

export interface externalVueConfigI {
  vueInstance: App | null;
}

const externalVueConfig = ({
  vueInstance = null,
}: externalVueConfigI) => {
  if (vueInstance === null) {
    console.error(`___Missing vue instance into configuration object___`);
    return null;
  }

  /**
   * Global event bus
   */
  vueInstance.config.globalProperties.eventBus = 'eventBus';

  return {
    i18nModule: {}
  };
};

export { externalVueConfig };
export default externalVueConfig;
