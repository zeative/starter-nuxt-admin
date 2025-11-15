<script setup>
definePageMeta({
  layout: 'dashboard',
});
</script>

<template>
  <div>
    <NuxtTime :datetime="Date.now()" locale="id-ID" />

    <NuxtTime :datetime="Date.now()" />

    <UButton>anayyy</UButton>

    <UInput loading type="file" />
  </div>
</template>
