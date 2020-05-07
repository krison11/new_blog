<template>
  <div>
    <div
      class="sticky top-0 left-0 flex justify-center md:justify-end items-center w-full h-40 p-20 bg-blue-900"
    >
      <div class="flex justify-around w-1/6 text-2xl text-blue-500">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  margin: 10px;
}
a:hover,
.nuxt-link-exact-active {
  color: rgb(173, 215, 247);
}
</style>
