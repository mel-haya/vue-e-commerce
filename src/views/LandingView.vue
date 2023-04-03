<template>
  <main class="h-screen font-logo">
    <header
      class="h-[10%] flex justify-between p-4 items-center bg-gray-900/50"
    >
      <h1 class="text-4xl tracking-wider font-bold">ATech</h1>
      <nav>
        <ul class="flex text-xl mx-4 text-white gap-10">
          <li>Store</li>
          <li>Sign up</li>
          <li><i class="fa-brands fa-opencart"></i></li>
        </ul>
      </nav>
    </header>
    <div
      id="caroussel"
      class="h-[90%] w-full flex overflow-hidden flex-nowrap relative"
    >
      <div
        :class="`w-[${items.length}00%] left-[${index * -100}%]`"
        class="flex absolute h-full"
      >
        <CarouselItem v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
    <div class="h-[90%] bg-green-500"></div>
  </main>
</template>

<script setup>
import CarouselItem from '../components/CarouselItem.vue'
import { ref } from 'vue'
const items = ref([
  {
    id: 1,
    name: 'Iphone 14 Pro',
    description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
    image: require('@/assets/images/iphone.png'),
  },
  {
    id: 2,
    name: 'Ipad Pro',
    description: '12.9”Liquid Retina XDR display. Best and brightest.',
    image: require('@/assets/images/ipad.png'),
  },
])
const index = ref(1)
</script>

<style>
main {
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
}

h1 {
  font-size: 72px;
  background-color: #e8c99b;
  background-image: linear-gradient(315deg, #e8c99b 0%, #e8bc85 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
