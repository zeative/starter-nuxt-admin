export default {
  brand: {
    image: '/skh.png',
    topTitle: 'MASTER ORGANISASI',
    bottomTitle: 'PERANGKAT DAERAH',

    showBrandImage: true,
    showBrandTitle: true,
  },

  // optional
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

  // secure
  baseAPIUrl: 'http://127.0.0.1:8000',

  cookieName: 'bearer-session.tokenize.master-opd',
  cookieExpire: 60 * 60 * 24,

  auth: {
    login: '',
    forgot: '',
    reset: '',
  },
};
