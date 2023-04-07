<template>
  <div class="h-[90vh] flex justify-center items-center">
    <div class="bg-white px-8 py-4 rounded-lg">
      <p class="text-red-500">{{ errMessage }}</p>
      <form action="" class="flex flex-col gap-2" @submit.prevent="submitLogin">
        <h2 class="text-center text-2xl font-bold">
          {{ login ? 'Login' : 'Create a new Account' }}
        </h2>
        <div class="flex gap-2 justify-end">
          <label for="userMail">Email: </label>
          <input
            class="focus:border-b-2 p-2 ml-auto focus:bg-gray-100 bg-gray-200 focus:border-green-500 outline-none"
            id="userMail"
            name="userMail"
            v-model="userMail"
            type="email"
          />
        </div>
        <div class="flex gap-2">
          <label for="password">Password: </label>
          <input
            class="focus:border-b-2 p-2 ml-auto focus:bg-gray-100 bg-gray-200 focus:border-green-500 outline-none"
            id="password"
            name="password"
            v-model="userPass"
            :type="showPass ? 'text' : 'password'"
          />
        </div>
        <div v-if="!login" class="flex gap-2">
          <label for="confirmPassword">Confirm Password: </label>
          <input
            v-model="confirmPassword"
            class="focus:border-b-2 p-2 ml-auto focus:bg-gray-100 bg-gray-200 focus:border-green-500 outline-none"
            id="confirmPassword"
            name="confirmPassword"
            :type="showPass ? 'text' : 'password'"
          />
        </div>
        <div class="flex gap-2">
          <input v-model="showPass" type="checkbox" name="" id="" />
          Show password
        </div>
        <input
          class="py-2 px-4 cursor-pointer bg-green-500 rounded-md text-white mt-2"
          type="submit"
          :value="login ? 'Login' : 'Sign Up'"
        />
        <p @click="login = !login" class="text-center underline cursor-pointer">
          {{ login ? 'Create a new account' : 'I already have an account' }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { useRouter } from 'vue-router/composables'
import { useStore } from '@/store'

const login = ref(true)
const showPass = ref(false)
const router = useRouter()
const store = useStore()

const userMail = ref('')
const userPass = ref('')
const confirmPassword = ref('')
const errMessage = ref('')

function submitLogin() {
  console.log('userMail:', userMail)
  if (login.value) {
    if (!userMail.value) {
      errMessage.value = 'Invalid Email'
      return
    }
    if (userPass.value.length < 8) {
      errMessage.value = 'Invalid Password'
      return
    }
    signInWithEmailAndPassword(auth, userMail.value, userPass.value)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user)
        store.commit('setUser', userCredential.user)
        router.push('/')
        // ...
      })
      .catch((error) => {
        errMessage.value = error.message
      })
  } else {
    if (!userMail.value) {
      errMessage.value = 'Invalid Email'
      return
    }
    if (userPass.value.length < 8) {
      errMessage.value = 'Password must be at least 8 characters long'
      return
    }
    if (userPass.value !== confirmPassword.value) {
      errMessage.value = 'Passwords must be identical'
      return
    }
    createUserWithEmailAndPassword(auth, userMail.value, userPass.value)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user)
        store.commit('setUser', userCredential.user)
        router.push('/')
        // ...
      })
      .catch((error) => {
        errMessage.value = error.message
      })
  }
}
</script>

<style></style>
