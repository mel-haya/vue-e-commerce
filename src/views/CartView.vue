<template>
  <div class="w-full flex justify-center">
    <div class="m-10 w-full rounded-md p-5 bg-white">
      <h2 class="font-semibold text-2xl">My cart</h2>
      <div v-if="!items.length" class="flex justify-center">
        <div class="my-6">
          <img src="../assets/images/cart.png" alt="" />
          <p class="text-center font-semibold text-lg">No items in the cart</p>
          <router-link to="/">
            <p class="text-center underline">Back to the store</p>
          </router-link>
        </div>
      </div>
      <div class="flex" v-else>
        <table class="grow">
          <thead class="border-b">
            <tr>
              <th class="pb-4">Product Details</th>
              <th class="pb-4">Price</th>
              <th class="pb-4">Quantity</th>
              <th class="pb-4">Total</th>
            </tr>
          </thead>
          <tbody>
            <CartItem
              @incQuantity="(id) => store.commit('incQuantity', id)"
              @decQuantity="(id) => store.commit('decQuantity', id)"
              @remove="(id) => store.commit('removeItem', id)"
              v-for="item in items"
              :item="item"
              :key="item.id"
            />
          </tbody>
        </table>
        <div
          class="bg-gray-100 w-1/6 p-4 flex flex-col justify-end gap-2 items-end"
        >
          <p class="text-xl">Total amount: {{ total }}$</p>
          <button class="bg-green-600 text-white px-5 py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from '../store'
import CartItem from '../components/CartItem.vue'

const store = useStore()
const items = computed(() => store.state.cart.cartItems)
const total = computed(() => store.getters.getTotalPrice)

onMounted(() => {
  console.log(store.state.cart)
})
</script>
