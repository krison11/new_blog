<template>
  <div>
    <article
      v-for="about in $store.state.aboutContent"
      :key="about.id"
      class="w-full mt-5 md:mt-20 flex justify-center items-center"
    >
      <div class="w-11/12 md:w-7/12 md:mt-20">
        <h1 class="text-center text-5xl mb-5">{{ about.title }}</h1>
        <p class="text-2xl">
          {{ about.content }}
        </p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Vuex from "vuex";

@Component
export default class about extends Vue {
  private aboutContent!: object[];
  // get aboutPage() {
  //   return  this.$store.state.aboutContent;
  // }
}
</script>
