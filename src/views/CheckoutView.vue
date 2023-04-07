<template>
  <div class="grid grid-cols-4">
    <div class="col-span-3 flex flex-col bg-white p-5">
      <h1 class="text-xl font-bold">Checkout</h1>
      <form @submit.prevent="submitOrder" class="flex flex-col gap-2">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />

        <label for="address">Address:</label>
        <input type="text" id="address" v-model="address" required />
        <div class="flex">
          <div class="flex-1 flex gap-2 items-center">
            <label for="city">City:</label>
            <input type="text" id="city" v-model="city" required />
          </div>
          <div class="flex-1 flex gap-2 items-center">
            <label for="state">State:</label>
            <input type="text" id="state" v-model="state" required />
          </div>
          <div class="flex-1 flex gap-2 items-center">
            <label for="zip">Zip code:</label>
            <input type="text" id="zip" v-model="zip" required />
          </div>
        </div>
        <div class="flex items-center gap-2">
          <label for="card">Credit card number:</label>
          <input type="text" id="card" v-model="card" required />

          <label for="exp">Expiration date:</label>
          <input type="text" id="exp" v-model="exp" required />
        </div>

        <button
          class="self-start bg-blue-600 py-2 px-5 text-white rounded-md"
          type="submit"
        >
          Submit Order
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const infos = reactive({
  name: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  card: '',
  exp: '',
})
function submitOrder() {
  console.log(infos)
}
</script>

<style scoped>
input {
  @apply bg-gray-200 p-2 focus:bg-gray-100 focus:border-2 focus:rounded border-b-2 border-gray-400 focus:border-green-500 outline-none;
}
</style>
