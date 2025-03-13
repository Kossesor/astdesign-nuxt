<script setup lang="ts">
import { useApplicationStore } from '~/store/application'

const { products } = storeToRefs(useApplicationStore())
const { fetchProducts } = useApplicationStore()

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div>
    <h2 class="font-bold text-3xl mb-6">
      Тестовая задача
    </h2>
    <div class="grid grid-cols-6">
      <v-product-card
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      />
    </div>
  </div>
</template>
