<template>
  <div id="caroussel" class="grow overflow-hidden relative">
    <Transition>
      <CarouselItem :key="items[index].id" :item="items[index]" />
    </Transition>
    <div class="flex absolute gap-2 bottom-[20px] left-1/4 -translate-x-1/2">
      <button
        v-for="(item, i) in items"
        :key="item.id"
        class="w-2 h-2 bg-white rounded"
        :class="i === index ? 'bg-white/80 scale-125' : 'bg-white/30'"
        @click="setIndex(i)"
      ></button>
    </div>
  </div>
</template>

<script setup>
import CarouselItem from './CarouselItem.vue'
import { defineProps, onUnmounted, ref, onMounted } from 'vue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
const index = ref(0)
function setIndex(newIndex) {
  this.index = newIndex
}
let interval = ref({})

onMounted(() => {
  interval = setInterval(function () {
    index.value++
    if (index.value > props.items.length - 1) index.value = 0
  }, 8000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 1s ease-out;
}

.v-enter-from,
.v-leave-to {
  transform: scale(120%);
  opacity: 0;
}
</style>
