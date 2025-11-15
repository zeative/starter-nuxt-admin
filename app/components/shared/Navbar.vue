<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui';
import { useFullscreen } from '@vueuse/core';

const { toggle } = useFullscreen();
const { isOnline } = useNetwork();
</script>

<template>
  <UDashboardNavbar title="Dashboard" class="!px-4">
    <template #leading>
      <UDashboardSidebarCollapse class="text-lg mr-1" />
    </template>

    <template #right>
      <div class="flex items-center gap-1 mr-2">
        <UButton icon="i-lucide-fullscreen" variant="ghost" color="neutral" class="text-lg" @click="toggle" />
        <UColorModeButton class="text-lg" />
      </div>

      <UAvatar
        src="https://github.com/zeative.png"
        alt="Zeative"
        loading="eager"
        class="border"
        :chip="{
          inset: true,
          color: isOnline ? 'success' : 'error',
        }"
      />
    </template>
  </UDashboardNavbar>
</template>
