<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <div v-if="product.id == $route.params.product">
        <nuxt-link :to="`/blog/${parentParam}`">
          <Button :text="`Back to ${parentParam}`" />
        </nuxt-link>
        <article
          class="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:mt-10 gap-4 p-4"
        >
          <div class="md:py-20">
            <h1 class="text-center text-5xl">{{ product.title }}</h1>
            <p class="text-2xl">{{ product.excerpt }}</p>
          </div>
          <div
            class="bg-center bg-cover rounded shadow-2xl"
            :style="`background-image: url(${product.featuredImage})`"
          ></div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Button from "../../../components/Button.vue";
import { IPost } from "../../../types/interfaces";

@Component({
  components: {
    Button
  }
})
export default class ShowPost extends Vue {
  @Prop() readonly products!: IPost[];
  @Prop() readonly parentParam!: string;
}
</script>

<style scoped></style>
