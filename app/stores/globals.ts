import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globals', () => {
  const sidebarOpen = ref(true);

  const toggleSidebar = () => {
    const stored = localStorage.getItem('sidebar.open');

    if (stored) {
      sidebarOpen.value = JSON.parse(stored);
    }

    localStorage.setItem('sidebar.open', sidebarOpen.value.toString());
  };

  return { sidebarOpen, toggleSidebar };
});
