<script setup lang="ts">
import { ref } from 'vue'

const messages = ref<string[]>([])

function addToast(message: string) {
  messages.value.push(message)
  setTimeout(() => {
    messages.value.shift()
  }, 5000)
}

function removeToaster(messageIndex: number) {
  messages.value.splice(messageIndex, 1)
}

defineExpose({ addToast })
</script>

<template>
  <transition>
    <div
      v-if="messages.length"
      class="fixed bottom-10 right-10"
    >
      <transition-group
        name="list"
        tag="ul"
        class="space-y-2"
      >
        <li
          v-for="(message, index) in messages"
          :key="index"
          class="w-fit cursor-pointer rounded-2xl border-4 border-pink-500 bg-pink-500 p-6 text-white transition hover:border-pink-300 active:border-pink-400"
          @click="removeToaster(index)"
        >
          Товар <span class="font-bold">{{ message }}</span> добавлен в
          <span class="underline">корзину</span>
        </li>
      </transition-group>
    </div>
  </transition>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
