<template>
  <article class="bg-white flex flex-col hover:scale-[102%] transition-all">
    <router-link :to="`/product/${item.id}`">
      <div class="m-2">
        <div
          id="thumbnail"
          class="w-full bg-no-repeat bg-cover bg-center aspect-square"
          :style="`background-image: url('${item.images[0]}')`"
        ></div>
      </div>
      <div class="flex flex-col p-2 grow bg-white">
        <h3
          class="text-2xl font-semibold text-[#0f0c29] cursor-pointer hover:text-[#383376]"
        >
          {{ item.displayName }}
        </h3>
        <p class="mt-auto">Ships to Morocco</p>
        <div class="flex flex-col">
          <p class="flex">
            $<span class="text-3xl font-semibold">{{ item.price }}</span>
          </p>
          <p class="flex items-center opacity-80">
            $<span class="text-xl line-through">{{ item.oldPrice }}</span>
          </p>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  item: {
    type: Object,
  },
})
</script>

<style>
/* #thumbnail {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
} */

article:hover {
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12);
}
</style>
