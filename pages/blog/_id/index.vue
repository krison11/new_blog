<template>
  <div>
    <nuxt-link to="/blog">
      <Button text="Back to blog" />
    </nuxt-link>

    <Posts :posts="products" :link="`/blog/${$route.params.id}`" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Posts from "../../../components/Posts.vue";
import Button from "../../../components/Button.vue";
import { IPost } from "../../../types/interfaces";

@Component({
  components: {
    Posts,
    Button
  }
})
export default class ShowPost extends Vue {
  @Prop() readonly products!: IPost[];
}
</script>

<style scoped>
</style>