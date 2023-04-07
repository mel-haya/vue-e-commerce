<template>
  <div id="app" class="flex flex-col">
    <header
      class="h-[10vh] flex justify-between p-4 items-center bg-gray-900/50"
    >
      <router-link to="/">
        <h1 class="golden-text text-5xl tracking-wider font-bold">ATech</h1>
      </router-link>
      <nav>
        <ul class="flex text-xl mx-4 text-white gap-10">
          <li><router-link to="/store">Store</router-link></li>
          <li><router-link to="/login">Sign up</router-link></li>
          <li>
            <router-link class="relative" to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
              <p
                v-if="cartCount"
                class="bg-red-500 top-0 -translate-y-1/2 translate-x-1/2 right-0 flex justify-center absolute items-center text-sm w-[20px] h-[20px] rounded-full"
              >
                {{ cartCount }}
              </p>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view />
    <footer class="p-5 bg-black/50 text-white">SQLI 2023</footer>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from './store/index'

const store = useStore()
const cartCount = computed(() => store.getters.getCartCount)
onMounted(async () => {
  await store.dispatch('initProducts')
})
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  font-family: Cairo, sans-serif;
}
.golden-text {
  background-color: #e8c99b;
  background-image: linear-gradient(315deg, #e8c99b 0%, #e8bc85 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
