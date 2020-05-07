<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <article
      class="shadow-xl hover:shadow-2xl rounded overflow-hidden"
      v-for="post in posts"
      :key="post.id"
    >
      <nuxt-link class="hover:text-black" :to="`${link}/${post.id}`">
        <div
          class="h-64 bg-center bg-cover"
          :style="`background-image: url(${post.featuredImage})`"
        ></div>
        <div class="bg-white p-2">
          <h1 class="text-center text-2xl mb-5">{{ post.title }}</h1>
          <p class="text-2xl">{{post.excerpt}}</p>
        </div>
      </nuxt-link>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { IPost } from "../types/interfaces";

@Component
export default class Posts extends Vue {
  @Prop() readonly posts!: IPost[];
  @Prop() readonly link!: string;
}
</script>
