<template>
  <div>
    <nav class="text-gray-300">
      <ul class="flex m-6 gap-4">
        <li @click="store.commit('setCategory', '')">
          <router-link
            :class="
              !route.params.category && 'text-white px-3 bg-blue-500 rounded'
            "
            class="hover:text-white"
            :to="`/store`"
            >All</router-link
          >
        </li>
        <li
          @click="store.commit('setCategory', categorie.name)"
          :key="categorie.displayName"
          v-for="categorie in store.state.product.categories"
        >
          <router-link
            :class="
              route.params.category === categorie.name &&
              'text-white px-3 bg-blue-500 rounded'
            "
            :to="`/store/${categorie.name}`"
            >{{ categorie.displayName }}</router-link
          >
        </li>
      </ul>
    </nav>
    <div class="w-full m-6 bg-white p-4 rounded">
      <h2 class="text-2xl font-bold border-b">
        {{ route.params.category || 'All Products' }}:
      </h2>
      <p>Results: {{ products.length }}</p>
      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 pt-5">
        <ProductCard v-for="item in products" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router/composables'
import { useStore } from '@/store'
import ProductCard from '../components/productCard.vue'

const route = useRoute()
const store = useStore()
const products = computed(() => store.getters.filteredProducts)

onMounted(() => {
  store.commit('setCategory', route.params.category)
})
</script>
