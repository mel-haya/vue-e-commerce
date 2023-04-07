<template>
  <div class="grid grid-cols-4 m-10">
    <div class="col-span-2 flex rounded-lg flex-col bg-white p-5">
      <h1 class="text-xl font-bold">Payment details</h1>
      <form @submit.prevent="submitOrder" class="flex flex-col gap-2">
        <label for="name">Full Name:</label>
        <input type="text" id="name" v-model="fullName" required />
        <label for="card">Card number:</label>
        <input type="text" id="card" v-model="card" required />
        <div class="flex items-center gap-2">
          <div class="flex flex-col">
            <label for="exp">Expiration Month:</label>
            <input type="text" id="exp" v-model="exp" required />
          </div>
          <div class="flex flex-col">
            <label for="exp">Expiration Year:</label>
            <input type="text" id="exp" v-model="exp" required />
          </div>
          <div class="flex flex-col">
            <label class="flex flex-cole" for="exp">CVC:</label>
            <input type="text" id="exp" v-model="exp" required />
          </div>
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
