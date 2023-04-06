<template>
  <button
    @click="addToCart"
    class="py-2 px-5 bg-blue-700 text-white rounded-md"
  >
    Add to cart
  </button>
</template>

<script setup>
import { useStore } from '@/store'
import { defineProps } from 'vue'
const store = useStore()
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const addToCart = () => {
  store.commit('addItem', props.product)
}
</script>

<style></style>
