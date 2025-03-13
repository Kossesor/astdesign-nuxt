<script setup lang="ts">
defineProps<{
  label: string
}>()

const emits = defineEmits(['click'])
</script>

<template>
  <button
    class="rounded-lg border-2 border-black bg-black px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black active:bg-black active:text-white"
    @click="emits('click')"
  >
    {{ label }}
  </button>
</template>
