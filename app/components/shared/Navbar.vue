<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';
import consts from '~/config/consts';

const { toggle } = useFullscreen();
const { isOnline } = useNetwork();
</script>

<template>
  <UDashboardNavbar title="Dashboard" class="!px-4" :hidden="consts.navbar.hideNavbar">
    <template #leading>
      <UDashboardSidebarCollapse class="text-lg mr-1" :hidden="!consts.navbar.showToggleSidebar" />
    </template>

    <template #right>
      <div class="flex items-center gap-1 mr-2">
        <UButton
          icon="i-lucide-fullscreen"
          variant="ghost"
          color="neutral"
          class="text-lg"
          @click="toggle"
          :hidden="!consts.navbar.showFullscreenToggle"
        />
        <UColorModeButton class="text-lg" :hidden="!consts.navbar.showThemeToggle" />
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
        :hidden="!consts.navbar.showProfilePicture"
      />
    </template>
  </UDashboardNavbar>
</template>
