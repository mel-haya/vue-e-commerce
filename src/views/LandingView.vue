<template>
  <main class="h-screen">
    <div class="md:h-1/2 flex">
      <Carousel :items="items" class="hidden md:block" />
      <div
        class="flex flex-col w-full md:w-[20%] items-center from-gray-900/70 to-gray-900/10 bg-gradient-to-b text-white"
      >
        <h2 class="text-4xl p-2">Categories</h2>
        <ul class="flex flex-col gap-2">
          <li>Computers and Laptops</li>
          <li>Mobile Devices</li>
          <li>Accessories</li>
          <li>Gaming</li>
          <li>Software</li>
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
import { ref } from 'vue'
import { useStore } from '@/store'

const store = useStore()
const items = ref([
  {
    id: 2,
    name: 'Iphone 14 Pro',
    description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
    image: require('@/assets/images/iphone.png'),
    price: 999,
  },
  {
    id: 6,
    name: 'Ipad Pro',
    description: '12.9”Liquid Retina XDR display. Best and brightest.',
    image: require('@/assets/images/ipad.png'),
    price: 1299,
  },
  {
    id: 3,
    name: 'Macbook air',
    description: 'MacBook Air with M1 is an incredibly portable laptop.',
    image: require('@/assets/images/macbook.png'),
    price: 1699,
  },
])
</script>

<style scoped>
h2 {
  background-color: #e8c99b;
  background-image: linear-gradient(315deg, #e8c99b 0%, #e8bc85 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
