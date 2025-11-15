<script setup>
import { useParallax } from '@vueuse/core';

definePageMeta({
  layout: 'dashboard',
});

const container = ref(null);
const { tilt, roll, source } = useParallax(container);
</script>

<template>
  <div>
    <NuxtTime :datetime="Date.now()" locale="id-ID" />

    <NuxtTime :datetime="Date.now()" />

    <UButton>anayyy</UButton>

    <UInput loading type="file" />
  </div>
</template>
