<template>
  <main class="h-screen">
    <div class="md:h-1/2 flex">
      <Carousel :items="items" class="hidden md:block" />
      <div
        class="flex flex-col w-full md:w-[20%] items-center from-gray-900/70 to-gray-900/10 bg-gradient-to-b text-white"
      >
        <h2 class="text-4xl p-2">Categories</h2>
        <ul class="flex flex-col gap-2">
          <li
            :key="categorie.displayName"
            v-for="categorie in store.state.product.categories"
          >
            <router-link :to="`/store/${categorie.name}`">{{
              categorie.displayName
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <h2 class="text-4xl p-4">Explore Popular Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 overflow-hidden">
      <ProductCard
        v-for="item in store.getters.products"
        :key="item.id"
        :item="item"
      />
    </div>
  </main>
</template>

<script setup>
import Carousel from '../components/carouselComponent.vue'
import ProductCard from '../components/productCard.vue'
import { onMounted, ref } from 'vue'
import { useStore } from '@/store'
import axios from 'axios'

const store = useStore()

const items = ref([])
onMounted(() => {
  axios.get('http://localhost:3000/carouselItems').then((res) => {
    items.value = res.data
  })
})
</script>

<style scoped>
h2 {
  background-color: #e8c99b;
  background-image: linear-gradient(315deg, #e8c99b 0%, #e8bc85 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
