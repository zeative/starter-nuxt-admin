import type { NavigationMenuItem } from '@nuxt/ui';

export default [
  [
    {
      label: 'Home',
      icon: 'i-lucide-house',
      href: '/dashboard',
    },
    {
      label: 'Inbox',
      icon: 'i-lucide-inbox',
      badge: '4',
      href: '/test',
    },
    {
      label: 'Contacts',
      icon: 'i-lucide-users',
    },
    {
      label: 'Settings',
      icon: 'i-lucide-settings',
      defaultOpen: true,
      children: [
        {
          label: 'General',
        },
        {
          label: 'Members',
        },
        {
          label: 'Notifications',
        },
      ],
    },
  ],
  [
    {
      label: 'Feedback',
      icon: 'i-lucide-message-circle',
      to: 'https://github.com/nuxt-ui-templates/dashboard',
      target: '_blank',
    },
    {
      label: 'Help & Support',
      icon: 'i-lucide-info',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
    },
  ],
] satisfies NavigationMenuItem[][];
