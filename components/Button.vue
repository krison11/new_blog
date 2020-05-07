<template>
  <div class="w-screen pr-10 flex justify-end">
    <button
      class="hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full focus:outline-none"
    >{{text}}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() readonly text!: string;
}
</script>

<style scoped>
</style>