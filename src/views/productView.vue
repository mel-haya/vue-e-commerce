<template>
  <div class="flex justify-center lg:my-10">
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
        <CartButton class="mt-2" :product="product" />
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
