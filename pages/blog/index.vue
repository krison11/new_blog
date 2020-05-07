<template>
  <div>
    <Posts :posts="posts" link="/blog" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Posts from "../../components/Posts.vue";
import { IPost } from "../../types/interfaces";

@Component({
  components: {
    Posts
  }
})
export default class Blog extends Vue {
  @Prop() readonly posts!: IPost[];
}
</script>
