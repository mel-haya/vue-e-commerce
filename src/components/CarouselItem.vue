<template>
  <div class="flex w-full h-full absolute">
    <div
      class="w-1/2 flex flex-col items-end justify-center bg-purple-100/20 text-white gap-3 p-5"
    >
      <h2 class="text-4xl font-bold">{{ item.name }}</h2>
      <p>{{ item.description }}</p>
      <router-link :to="`/product/${item.productId}`" class="underline">
        more details
      </router-link>
    </div>
    <div class="w-1/2 flex justify-center items-center">
      <img :src="item.image" class="max-h-[400px]" alt="iphone" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  item: Object,
})
</script>

<style></style>
