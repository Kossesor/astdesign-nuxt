import { defineStore } from 'pinia'
import { apiPath } from '~/utils/api'
import type { Product } from '~/shared/types/types'

export const useApplicationStore = defineStore('application', () => {
  const products = ref<Product[]>([])
  const fetchProducts = async () => {
    if (!products.value.length) {
      products.value = await $fetch(apiPath.products)
    }
  }

  const cart = ref<Product[]>([])
  function addToCart(productId: string) {
    const productToAdd = products.value?.find(({ id }) => id === productId)
    if (!productToAdd) return 'Product not found'
    cart.value.push(productToAdd)
  }

  return {
    products,
    fetchProducts,
    cart,
    addToCart,
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
    pick: ['cart', 'products'],
  },
})
