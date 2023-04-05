<template>
  <div id="app">
    <header
      class="h-[10%] flex justify-between p-4 items-center bg-gray-900/50"
    >
      <router-link to="/">
        <h1 class="text-5xl tracking-wider font-bold">ATech</h1>
      </router-link>
      <nav>
        <ul class="flex text-xl mx-4 text-white gap-10">
          <li>Store</li>
          <li>Sign up</li>
          <li><i class="fa-brands fa-opencart"></i></li>
        </ul>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from './store/index'

const store = useStore()
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
</style>

<style scoped>
h1 {
  background-color: #e8c99b;
  background-image: linear-gradient(315deg, #e8c99b 0%, #e8bc85 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
