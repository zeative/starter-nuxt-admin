<script setup>
import Navbar from '~/components/shared/Navbar.vue';
import Sidebar from '~/components/shared/Sidebar.vue';
</script>

<template>
  <UDashboardGroup>
    <Sidebar />

    <UDashboardPanel>
      <template #header>
        <Navbar />
      </template>

      <template #body>
        <nuxt-link href="/dashboard">piapaiiap</nuxt-link>
        <nuxt-link href="/test">skdknskdj</nuxt-link>

        <slot />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
