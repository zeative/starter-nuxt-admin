<script setup>
useHead({
  titleTemplate: '%s - Site Title',
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
