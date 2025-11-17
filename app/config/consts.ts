export default {
  brand: {
    image: '/skh.png',
    topTitle: 'MASTER ORGANISASI',
    bottomTitle: 'PERANGKAT DAERAH',

    showBrandImage: true,
    showBrandTitle: true,

    hideBrand: false,
  },

  navbar: {
    showThemeToggle: true,
    showFullscreenToggle: true,
    showProfilePicture: true,
    showOnlineStatus: true,
    showToggleSidebar: true,
    showTitleSidebar: true,

    hideNavbar: false,
  },

  sidebar: {
    showBrandLogo: true,
    showSeacrhBar: true,
    showProfilePicture: true,

    hideSidebar: false,
  },

  footer: {
    showBrandLogo: true,
    showTitle: true,

    hideFooter: false,
  },

  api: {
    base: 'http://127.0.0.1:8000',
    admin: 'http://127.0.0.1:8000/api/admin',
  },

  cookie: {
    name: 'bearer-session.tokenize.master-opd',
    expired: 60 * 60 * 24,
  },

  auth: {
    login: '',
    forgot: '',
    reset: '',
  },
};
