<template>
  <main class="h-screen font-logo">
    <header
      class="h-[10%] flex justify-between p-4 items-center bg-gray-900/50"
    >
      <h1 class="text-5xl tracking-wider font-bold">ATech</h1>
      <nav>
        <ul class="flex text-xl mx-4 text-white gap-10">
          <li>Store</li>
          <li>Sign up</li>
          <li><i class="fa-brands fa-opencart"></i></li>
        </ul>
      </nav>
    </header>
    <div class="flex h-1/2">
      <Carousel :items="items" />
      <div
        class="flex flex-col w-[10%] items-center from-gray-900/70 to-gray-900/20 bg-gradient-to-b text-white"
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
    <div class="grid grid-cols-8 overflow-hidden">
      <ProductCard v-for="item in items" :key="item.id" :item="item" />
      <ProductCard v-for="item in items" :key="item.id" :item="item" />
      <ProductCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </main>
</template>

<script setup>
import Carousel from '../components/carouselComponent.vue'
import ProductCard from '../components/productCard.vue'
import { ref } from 'vue'
const items = ref([
  {
    id: 1,
    name: 'Iphone 14 Pro',
    description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
    image: require('@/assets/images/iphone.png'),
    price: 999,
  },
  {
    id: 2,
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

<style>
body {
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
}

h1,
h2 {
  font-size: 72px;
  background-color: #e8c99b;
  background-image: linear-gradient(315deg, #e8c99b 0%, #e8bc85 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
