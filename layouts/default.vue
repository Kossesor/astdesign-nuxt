<template>
  <div class="flex h-screen flex-col ">
    <v-header class="sticky top-0" />

    <main class="flex-auto py-7 px-10">
      <slot />
    </main>

    <v-footer />
  </div>
</template>
