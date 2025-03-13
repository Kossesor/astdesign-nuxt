<script setup lang="ts">
import { useApplicationStore } from '~/store/application'

const { cart } = storeToRefs(useApplicationStore())

function resetSessionStorage() {
  window.location.reload()
  sessionStorage.clear()
}
</script>

<template>
  <nav class="flex justify-between bg-white py-7 pl-10 pr-32 shadow-xl">
    <nuxt-link to="/">
      <h1 class="text-4xl font-bold">Brand Name</h1>
    </nuxt-link>

    <div class="flex gap-x-2 items-center">
      <Icon
        name="material-symbols:shopping-basket-outline"
        size="32"
      />
      <div>{{ cart.length }} товаров</div>
      <Icon
        class="cursor-pointer active:text-neutral-400 hover:text-neutral-500"
        name="material-symbols:refresh"
        size="32"
        @click="resetSessionStorage()"
      />
    </div>
  </nav>
</template>
