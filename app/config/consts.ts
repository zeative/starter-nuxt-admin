export default {
  brandImage: '/skh.png',
  brandTopTitle: 'MASTER ORGANISASI',
  brandBottomTitle: 'PERANGKAT DAERAH',

  // optional
  navbar: {
    showThemeToggle: true,
    showFullscreenToggle: true,
    showProfilePicture: true,
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
};
