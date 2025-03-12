<script setup lang="ts">
import { useApplicationStore } from '~/store/application'
import { apiPath } from '~/utils/api'

const { welcome } = useApplicationStore()

const { believe } = await $fetch(apiPath.hello)
</script>

<template>
  <div class=" h-screen flex items-center justify-center text-center">
    <div>
      <div class="flex mb-8  items-center justify-center text-3xl font-bold">
        <Icon
          name="material-symbols:shopping-basket-outline"
          class="mr-4 text-pink-600"
        />
        {{ welcome }}
      </div>
      <div class="text-2xl">
        {{ believe }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
