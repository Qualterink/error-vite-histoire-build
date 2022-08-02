<template>
  <button
    :class="
      ['shpref-shared__button', `shpref-shared__button--${type}`]
    "
  >
    <slot />
  </button>
</template>

<script lang="ts">
import type { ButtonTypeEnum } from "@/lib-components/api/shared/ButtonTypes";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ShButton",
  props: {
    type: {
      required: false,
      default: "default",
      type: String as () => ButtonTypeEnum
    },
  }
});
</script>

<style lang="scss">
.shpref-shared__button {
  cursor: pointer;
  font-size: 0.875rem;
  padding: 10px;
  text-align: left;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: transform 0.15s ease-in-out, border 0.15s ease-in-out,
  background-color 0.15s ease-in-out;
  outline: none;
  word-break: break-word;
  color: #fefefe;

  &--default {
    background: #0e0e0e;
  }

  &--green {
    background: green;
  }

  &--blue {
    background: blue;
  }

  &--red {
    background: red;
  }
}
</style>
