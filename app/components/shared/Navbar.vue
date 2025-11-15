<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui';

const items: TabsItem[] = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Unread',
    value: 'unread',
  },
];
</script>

<template>
  <UDashboardNavbar title="Dashboard" class="!px-4">
    <template #leading>
      <UDashboardSidebarCollapse class="text-lg mr-1" />
    </template>

    <template #right>
      <UAvatar
        src="https://github.com/zeative.png"
        alt="Zeative"
        loading="eager"
        :chip="{
          inset: true,
        }"
      />
    </template>
  </UDashboardNavbar>
</template>
