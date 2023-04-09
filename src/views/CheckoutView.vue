<template>
  <div class="grid grid-cols-4 m-10 gap-x-5">
    <div class="col-span-2 flex rounded-lg flex-col bg-white p-5">
      <h1 class="text-xl font-bold">Payment details</h1>
      <form @submit.prevent="submitOrder" class="flex flex-col gap-2">
        <p class="text-red-500">{{ errMessage }}</p>
        <label for="name">Full Name:</label>
        <input type="text" id="name" v-model="fullName" required />
        <label for="card">Card number:</label>
        <input type="text" id="card" v-model="card" required />
        <div class="flex items-center gap-2">
          <div class="flex flex-col">
            <label for="exp">Expiration Month:</label>
            <input type="number" id="exp" v-model="expMonth" required />
          </div>
          <div class="flex flex-col">
            <label for="exp">Expiration Year:</label>
            <input type="number" id="exp" v-model="expYear" required />
          </div>
          <div class="flex flex-col">
            <label class="flex flex-cole" for="exp">CVC:</label>
            <input type="text" id="exp" v-model="CVC" required />
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
    <div class="col-span-1 flex rounded-lg flex-col bg-white p-5">
      <h2 class="text-xl font-bold">Total amount:</h2>
      <p class="font-bold">{{ total }}$</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router/composables'

const router = useRouter()
const store = useStore()

const fullName = ref('')
const card = ref('')
const expMonth = ref('')
const expYear = ref('')
const CVC = ref('')

const errMessage = ref('Hello')
const total = computed(() => store.getters.getTotalPrice)
function submitOrder() {
  if (/^[A-Za-z\s]{5,}$/.test(fullName.value) === false) {
    errMessage.value = 'Full name must be atleast 5 characters long'
    return
  }
  if (/^\d{16}$/.test(card.value) === false) {
    errMessage.value = 'Card Number must be 16 characters long'
    return
  }
  if (expMonth.value < 1 || expMonth.value > 12) {
    errMessage.value = 'Invalid expiration month'
    return
  }
  if (expYear.value < 2023 || expMonth.value > 2100) {
    errMessage.value = 'Invalid expiration year'
    return
  }
  if (/^\d{3}$/.test(card.value) === false) {
    errMessage.value = 'CVC must contain 3 digits'
    return
  }
  store.commit('emptyCart')
  router.push('/')
}
</script>

<style scoped>
input {
  @apply bg-gray-200 p-2 focus:bg-gray-100 focus:border-2 focus:rounded border-b-2 border-gray-400 focus:border-green-500 outline-none;
}
</style>
