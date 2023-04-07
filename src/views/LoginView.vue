<template>
  <div class="h-[90vh] flex justify-center items-center">
    <div class="bg-white px-8 py-4 rounded-lg">
      <form action="" class="flex flex-col gap-2" @submit="submitLogin">
        <h2 class="text-center text-2xl font-bold">
          {{ login ? 'Login' : 'Create a new Account' }}
        </h2>
        <div class="flex gap-2 justify-end">
          <label for="">Username: </label>
          <input
            class="focus:border-b-2 p-2 ml-auto focus:bg-gray-100 bg-gray-200 focus:border-green-500 outline-none"
            id="username"
            name="username"
            type="text"
          />
        </div>
        <div class="flex gap-2">
          <label for="password">Password: </label>
          <input
            class="focus:border-b-2 p-2 ml-auto focus:bg-gray-100 bg-gray-200 focus:border-green-500 outline-none"
            id="password"
            name="password"
            :type="showPass ? 'text' : 'password'"
          />
        </div>
        <div v-if="!login" class="flex gap-2">
          <label for="confirmPassword">Confirm Password: </label>
          <input
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

const login = ref(true)
const showPass = ref(false)

function submitLogin() {}
</script>

<style></style>
