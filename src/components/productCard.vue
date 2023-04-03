<template>
  <article
    class="bg-gray-100 flex flex-col h-[30vh] hover:scale-[102%] transition-all"
  >
    <div class="h-5/6 m-4">
      <div
        id="thumbnail"
        class="h-full bg-no-repeat bg-cover bg-center"
        :style="`background-image: url(${item.image})`"
      ></div>
    </div>
    <div class="flex flex-col p-2 bg-white">
      <h3
        class="text-2xl font-semibold text-[#0f0c29] cursor-pointer hover:text-[#383376]"
      >
        {{ item.name }}
      </h3>
      <p>Ships to Morocco</p>
      <p class="flex">
        $<span class="text-2xl font-semibold">{{ item.price }}</span>
      </p>
    </div>
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
#thumbnail {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

article:hover {
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12);
}
</style>
