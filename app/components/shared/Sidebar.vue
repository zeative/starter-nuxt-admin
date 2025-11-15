<script setup lang="ts">
import Brand from './Brand.vue';
import sidebars from '~/config/sidebars';
</script>

<template>
  <UDashboardSidebar collapsible  :ui="{ footer: 'border-t border-default' }">
    <template #header="{ collapsed }">
      <Brand :hideTitle="collapsed" />
    </template>

    <template #default="{ collapsed }">
      <UButton
        :label="collapsed ? undefined : 'Search...'"
        icon="i-lucide-search"
        color="neutral"
        variant="outline"
        block
        :square="collapsed"
      >
        <template v-if="!collapsed" #trailing>
          <div class="flex items-center gap-0.5 ms-auto">
            <UKbd value="meta" variant="subtle" />
            <UKbd value="K" variant="subtle" />
          </div>
        </template>
      </UButton>

      <UNavigationMenu :collapsed="collapsed" :items="sidebars[0]" orientation="vertical" />

      <UNavigationMenu :collapsed="collapsed" :items="sidebars[1]" orientation="vertical" class="mt-auto" />
    </template>

    <template #footer="{ collapsed }">
      <UButton
        :avatar="{
          src: 'https://github.com/benjamincanac.png',
        }"
        :label="collapsed ? undefined : 'Benjamin'"
        color="neutral"
        variant="ghost"
        class="w-full"
        :block="collapsed"
      />
    </template>
  </UDashboardSidebar>
</template>
