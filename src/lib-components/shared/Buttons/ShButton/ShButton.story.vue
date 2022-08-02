<template>
  <Story title="Buttons/ShButton" :layout="{ type: 'grid', width: '300px' }">
    <Variant title="Default">
      <ShButton :disabled="state.disabled" @click="hstEvent('Click', $event)">
        {{ state.content }}
      </ShButton>
    </Variant>
    <Variant title="Green">
      <ShButton type="green">Button</ShButton>
    </Variant>
    <Variant title="Red">
      <ShButton type="red">Button</ShButton>
    </Variant>
    <Variant title="Blue">
      <ShButton type="blue">Button</ShButton>
    </Variant>
    <Variant title="Close">
      <ShButton type="close">Button</ShButton>
    </Variant>
    <Variant title="Transparent">
      <ShButton type="transparent">Button</ShButton>
    </Variant>
    <Variant title="iconLeftSideName">
      <ShButton icon-left-side-name="phone">Button</ShButton>
    </Variant>
    <Variant title="iconLeftSideName">
      <ShButton icon-right-side-name="phone">Button</ShButton>
    </Variant>
    <Variant title="disabled">
      <ShButton :disabled="true">Button</ShButton>
    </Variant>
    <Variant title="hollow">
      <ShButton :hollow="true">Button</ShButton>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import ShButton from "./ShButton.vue";
import { hstEvent } from "histoire/client";

const state = reactive({
  disabled: false,
  content: "Button"
});
</script>

<style scoped></style>
