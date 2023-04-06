<template>
  <tr>
    <td>
      <div class="flex py-2">
        <div
          :style="`background-image: url('${
            item.images.length ? item.images[0] : noImage
          }')`"
          class="bg-cover bg-center w-[200px] h-[200px]"
        ></div>
        <div class="p-2 flex flex-col gap-2">
          <h1 class="text-xl font-bold">{{ item.displayName }}</h1>
          <h2>{{ item.brand }}</h2>
          <p
            @click="emit('remove', item.id)"
            class="text-red-500 cursor-pointer text-left"
          >
            Remove
          </p>
        </div>
      </div>
    </td>
    <td class="px-5 align-center">
      <p class="flex items-center justify-center">
        $<span class="text-3xl font-semibold">{{ item.price }}</span>
      </p>
    </td>
    <td class="px-5 align-center">
      <div class="flex justify-center">
        <div class="flex border rounded-lg overflow-hidden border-gray-400">
          <button
            @click="emit('decQuantity', item.id)"
            class="bg-gray-200 px-2"
          >
            -
          </button>
          <p class="px-2">{{ item.quantity }}</p>
          <button
            @click="emit('incQuantity', item.id)"
            class="bg-gray-200 px-2"
          >
            +
          </button>
        </div>
      </div>
    </td>
    <td class="px-5 align-center">
      <p class="flex justify-center items-center">
        $<span class="text-3xl font-semibold">{{ total }}</span>
      </p>
    </td>
  </tr>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const emit = defineEmits(['incQuantity', 'decQuantity', 'remove'])
const noImage =
  'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
const total = computed(() => props.item.price * props.item.quantity)
</script>
