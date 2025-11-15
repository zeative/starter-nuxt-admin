<script setup lang="ts">
import consts from '~/config/consts';

defineProps({
  hideTitle: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="transition-none relative flex gap-2 select-none" :class="{ 'mx-auto': hideTitle }">
    <NuxtImg :src="consts.brandImage" alt="logo-icon" class="w-6 h-fit mt-0.5" />
    <h6 class="is-drawer-close:hidden text-xs font-black tracking-wider" v-if="!hideTitle">
      <span>{{ consts.brandTopTitle }}</span>
      <br />
      <span>{{ consts.brandBottomTitle }}</span>
    </h6>
  </div>
</template>
