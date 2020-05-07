<template>
  <div>
    <nuxt-child :posts="$store.state.blogPosts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit } from "vue-property-decorator";
import { IPost } from "../types/interfaces";
import Vuex from "vuex";

@Component
export default class Blog extends Vue {
  // get blogPosts() {
  //   return this.$store.state.blogPosts;
  // }
}
</script>

<style scoped></style>
