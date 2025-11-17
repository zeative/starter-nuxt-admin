<script setup lang="ts">
await callOnce(async () => {
  console.log('This will only be logged once');
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <UApp>
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
