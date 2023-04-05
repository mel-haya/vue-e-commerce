<template>
  <div class="flex justify-center lg:mt-10">
    <div
      class="lg:w-2/3 lg:rounded-lg bg-white flex-col gap-4 md:flex-row flex p-6"
    >
      <div>
        <div
          :style="`background-image: url('${selectedImg}')`"
          class="product-image border-2 w-[350px] h-[350px]"
        ></div>
        <div class="flex mt-4">
          <div
            v-for="img in product.images"
            :key="img"
            :class="selectedImg === img && 'border-2 border-[#d2a41b]'"
            class="product-image w-[60px] h-[60px] cursor-pointer"
            :style="`background-image: url('${img}')`"
            @click="selectedImg = img"
          ></div>
        </div>
      </div>
      <div class="mx-6">
        <h2 class="text-black font-semibold text-3xl">{{ product.name }}</h2>
        <h3 class="font-semibold mb-4">{{ product.brand }}</h3>
        <div class="flex items-end gap-2">
          <p class="flex">
            $<span class="text-3xl font-semibold">{{ product.price }}</span>
          </p>
          <p class="flex items-center opacity-80">
            $<span class="text-xl line-through">{{ product.oldPrice }}</span>
          </p>
        </div>
        <p>
          {{ product.rating }}<i class="fa-solid fa-star text-[#d2a41b]"></i>
        </p>
        <p class="lg:w-2/3">{{ product.description }}</p>
        <button class="mt-4 py-2 px-5 bg-blue-700 text-white rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from '../store'
import { useRoute } from 'vue-router/composables'
// import { useRoute } from 'vue-router/composables'
const store = useStore()
const route = useRoute()
// const product = ref({
//   id: 55566,
//   name: 'Apple iPhone XS, 5.8" , 64Go - Gold',
//   brand: 'Apple',
//   category: 'Smartphone',
//   rating: 4.6,
//   price: 455,
//   oldPrice: 700,
//   images: [
//     'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/279514/1.jpg?1087',
//     'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/279514/2.jpg?1087',
//     'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/279514/3.jpg?1087',
//   ],
//   description:
//     "a high-end smartphone with a 5.8-inch Super Retina OLED display, dual 12-megapixel rear cameras, and a 7-megapixel front-facing camera. It is powered by Apple's A12 Bionic chip and features Face ID for secure authentication. The iPhone XS also includes water resistance, wireless charging, and supports iOS updates for several years.",
// })
let product = ref({})

const selectedImg = ref('')

// const route = useRoute()

onMounted(async () => {
  const id = route.params.id
  await store.dispatch('fetchProduct', id)
  product.value = store.state.product.currProduct
  selectedImg.value = product.value.images[0]
})
</script>

<style scoped>
.product-image {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
