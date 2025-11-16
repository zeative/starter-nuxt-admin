<script setup>
definePageMeta({
  layout: 'dashboard',
});
</script>

<template>
  <div class="flex flex-col">
    <h1>Test Aja</h1>
    <NuxtTime :datetime="Date.now()" locale="id-ID" />
  </div>
</template>
