<script setup lang="ts"></script>

<template>
  <div class="flex h-screen max-w-[1440px] flex-col px-16 py-6">
    <Header class="z-20 mb-12" />

    <main class="container mb-auto">
      <slot />
    </main>

    <Footer class="mt-28" />
  </div>
</template>

<style scoped></style>
