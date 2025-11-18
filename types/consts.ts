interface BrandConfig {
  image: string;
  topTitle: string;
  bottomTitle: string;
  showBrandImage: boolean;
  showBrandTitle: boolean;
  hideBrand: boolean;
}

interface NavbarConfig {
  showThemeToggle: boolean;
  showFullscreenToggle: boolean;
  showProfilePicture: boolean;
  showOnlineStatus: boolean;
  showToggleSidebar: boolean;
  showTitleSidebar: boolean;
  hideNavbar: boolean;
}

interface SidebarConfig {
  showBrandLogo: boolean;
  showSeacrhBar: boolean;
  showProfilePicture: boolean;
  hideSidebar: boolean;
}

interface FooterConfig {
  showBrandLogo: boolean;
  showTitle: boolean;
  hideFooter: boolean;
}

interface ApiConfig {
  base: string;
  admin: string;
}

type CookieOptions = Parameters<typeof setCookie>['3']

interface CookieConfig {
  name: string;
  options: CookieOptions;
}

interface AuthConfig {
  login: string;
  forgot: string;
  reset: string;
}

export interface ConstsConfig {
  brand: BrandConfig;
  navbar: NavbarConfig;
  sidebar: SidebarConfig;
  footer: FooterConfig;
  api: ApiConfig;
  cookie: CookieConfig;
  auth: AuthConfig;
}
