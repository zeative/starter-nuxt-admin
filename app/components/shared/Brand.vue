<script setup lang="ts">
defineProps({
  hideTitle: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="transition-none relative flex gap-2 select-none" :class="{ 'mx-auto': hideTitle }">
    <NuxtImg src="/skh.png" alt="logo-icon" class="w-6 h-fit mt-0.5" />
    <h6 class="is-drawer-close:hidden text-xs font-black tracking-wider" v-if="!hideTitle">
      <span>MASTER ORGANISASI</span>
      <br />
      <span>PERANGKAT DAERAH</span>
    </h6>
  </div>
</template>
