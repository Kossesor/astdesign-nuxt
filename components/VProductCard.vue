<script setup lang="ts">
import type { Product } from '~/shared/types/types'
import UiButton from '~/components/ui/UiButton.vue'
import { useApplicationStore } from '~/store/application'

const { image, newPrice, oldPrice } = defineProps<Product>()
const { addToCart } = useApplicationStore()

const hover = ref(false)

const bgImage = computed(() => `background-image: url(${image})`)

const discount = computed(() => {
  const discount = ((oldPrice - newPrice) / oldPrice) * -100
  return `${Math.floor(discount)}%`
})

function format(price: number) {
  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  })
}

const onHover = computed(() => {
  return hover.value ? ' absolute drop-shadow-2xl z-10' : ''
})
</script>

<template>
  <div
    class="relative"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div
      :class="onHover"
      class="grid gap-y-3 rounded-2xl bg-white p-6 transition"
    >
      <div
        :style="bgImage"
        class="grid aspect-square items-end rounded-xl bg-cover bg-center p-1.5"
      >
        <span
          v-if="oldPrice"
          class="w-fit rounded bg-white px-1.5 py-1 text-xs font-semibold text-pink-500"
        >
          {{ discount }}
        </span>
      </div>
      <div class="grid gap-y-0.5">
        <div class="font-bold">
          {{ format(newPrice) }}
          <span
            v-if="oldPrice"
            class="text-xs text-neutral-400 line-through"
          >
            {{ format(oldPrice) }}
          </span>
        </div>
        <div class="truncate font-semibold">
          {{ name }}
        </div>
        <div class="line-clamp-2">
          {{ description }}
        </div>
      </div>
      <div class="relative">
        <transition>
          <div v-if="hover">
            <ui-button
              label="В корзину"
              @click="addToCart(id)"
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-leave-active {
  position: absolute;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
