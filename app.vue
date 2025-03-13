<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useApplicationStore } from '~/store/application'

const toasterRef = ref()
const { cart } = storeToRefs(useApplicationStore())

onMounted(() => {
  watch(
    () => cart.value.length,
    (i) => {
      toasterRef.value?.addToast(cart.value[i - 1].name)
    },
  )
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <ui-toast ref="toasterRef" />
    </NuxtLayout>
  </div>
</template>
