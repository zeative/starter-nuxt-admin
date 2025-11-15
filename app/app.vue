<script setup>
useHead({
  titleTemplate: '%s - Site Title',
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />

    <UApp>
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
