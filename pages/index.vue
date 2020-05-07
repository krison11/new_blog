<template>
  <div>
    <article
      v-for="home in $store.state.homeContent"
      :key="home.id"
      class="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:mt-20 gap-4 p-4"
    >
      <div class="md:py-20">
        <h1 class="text-center text-5xl">{{ home.title }}</h1>
        <p class="text-2xl">
          {{ home.content }}
        </p>
      </div>
      <div
        class="bg-center bg-cover rounded shadow-2xl"
        :style="`background-image: url(${home.image})`"
      ></div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Vuex from "vuex";

@Component
export default class Index extends Vue {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }
  // get homePage() {
  //   return this.$store.state.homeContent;
  // }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
