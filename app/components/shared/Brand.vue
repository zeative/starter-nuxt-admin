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
    <NuxtImg :src="consts.brand.image" alt="logo-icon" class="w-6 h-fit mt-0.5" v-if="consts.brand.showBrandImage" />
    <h6
      class="is-drawer-close:hidden text-xs font-black tracking-wider max-xl:line-clamp-1"
      v-if="!hideTitle && consts.brand.showBrandTitle"
    >
      <span>{{ consts.brand.topTitle }}</span>
      <br />
      <span>{{ consts.brand.bottomTitle }}</span
      ><!--  -->
    </h6>
  </div>
</template>
