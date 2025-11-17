<script setup>
defineProps({
  icon: String,
  size: {
    default: 18,
  },
});
</script>

<template>
  <Icon :icon="icon" :size="size" class="inline-block size-4 shrink-0" v-once />
</template>
