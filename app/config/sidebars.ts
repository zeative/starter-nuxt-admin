import type { NavigationMenuItem } from '@nuxt/ui';

export default [
  [
    {
      label: 'Dashboard',
      icon: 'i-lucide-house',
      href: '/dashboard',
    },

    {
      label: 'MASTER',
      type: 'label',
      class: 'text-[10px] text-natural mt-3',
    },
    {
      label: 'Organisasi',
      icon: 'i-lucide-building-2',
      href: '/master/organization',
    },
    {
      label: 'Eselon',
      icon: 'i-lucide-layers',
      href: '/master/echelon',
    },
    {
      label: 'Jabatan',
      icon: 'i-lucide-medal',
      href: '/master/position',
    },

    {
      label: 'INTEGRASI',
      type: 'label',
      class: 'text-[10px] text-natural mt-3',
    },
    {
      label: 'Kredensial',
      icon: 'i-lucide-lock-keyhole',
      href: '/integration/credential',
    },
    {
      label: 'Kelola Akses',
      icon: 'i-lucide-monitor-cog',
      href: '/integration/scopes',
      roles: ['admin', 'superadmin'],
    },

    {
      label: 'MANAJEMEN',
      type: 'label',
      class: 'text-[10px] text-natural mt-3',
    },
    {
      label: 'Member',
      icon: 'i-lucide-users-round',
      href: '/internal/member',
    },
    {
      label: 'Kelola Akses',
      icon: 'i-lucide-user-round-cog',
      href: '/internal/role',
    },
    {
      label: 'Konfigurasi',
      icon: 'i-lucide-server-cog',
      href: '/internal/member',
    },
  ],
  [
    {
      label: 'Open Source',
      icon: 'i-lucide-github',
      to: 'https://github.com/zeative/starter-nuxt-admin',
      target: '_blank',
    }
  ],
] satisfies NavigationMenuItem[][];
