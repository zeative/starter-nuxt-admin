<template>
  <UDashboardGroup>
    <SharedSidebar />

    <UDashboardPanel>
      <template #header>
        <SharedNavbar />
      </template>

      <template #body>
        <slot />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
