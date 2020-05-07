<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <div v-if="post.id == $route.params.id">
        <nuxt-child :parentParam="$route.params.id" :products="post.products" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { IPost } from "../../types/interfaces";

@Component
export default class ShowPost extends Vue {
  @Prop() readonly posts!: IPost[];
  //  async asyncData({ params, payload }) {
  //   if (payload) return { blogPost: payload };
  //   else
  //     return {
  //       blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
  //     };
  // }
}
</script>

<style scoped></style>
