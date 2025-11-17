<script setup lang="ts">
import consts from '~/config/consts';
import sidebars from '~/config/sidebars';
</script>

<template>
  <UDashboardSidebar collapsible :ui="{ footer: 'border-t border-default' }" :hidden="consts.sidebar.hideSidebar">
    <template #header="{ collapsed }">
      <SharedBrand :hideTitle="collapsed" :hidden="!consts.sidebar.showBrandLogo" />
    </template>

    <template #default="{ collapsed }">
      <UButton
        :label="collapsed ? undefined : 'Search...'"
        icon="i-lucide-search"
        color="neutral"
        variant="outline"
        block
        :square="collapsed"
        :hidden="!consts.sidebar.showSeacrhBar"
      >
        <template v-if="!collapsed" #trailing>
          <div class="flex items-center gap-0.5 ms-auto">
            <UKbd value="meta" variant="subtle" />
            <UKbd value="K" variant="subtle" />
          </div>
        </template>
      </UButton>

      <UNavigationMenu
        :collapsed="collapsed"
        :items="sidebars[0]"
        orientation="vertical"
        class="[&_*_.iconify]:text-lg [&_*_.iconify]:mr-0.5 [&_li]:mb-1"
        :class="collapsed && '[&_*_.iconify]:mx-auto [&_li]:mb-1 [&_*_.iconify]:text-lg'"
      />

      <UNavigationMenu
        :collapsed="collapsed"
        :items="sidebars[1]"
        orientation="vertical"
        class="[&_*_.iconify]:text-lg [&_*_.iconify]:mr-0.5 [&_li]:mb-1 mt-auto"
        :class="collapsed && '[&_*_.iconify]:mx-auto [&_li]:mb-1 [&_*_.iconify]:text-lg'"
      />
    </template>

    <template #footer="{ collapsed }">
      <UButton
        :avatar="{
          src: 'https://github.com/zeative.png',
        }"
        :label="collapsed ? undefined : 'Zeative Media'"
        color="neutral"
        variant="ghost"
        class="w-full"
        :block="collapsed"
        :hidden="!consts.sidebar.showProfilePicture"
      />
    </template>
  </UDashboardSidebar>
</template>
