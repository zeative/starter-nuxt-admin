import consts from '~/config/consts';

const AUTH_PAGE = ['/auth/login', '/auth/forgot', '/auth/reset'];

export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie(consts.cookieName);

  if (!token.value) {
    return navigateTo('/auth/login');
  }

  if (to.params.auth && !AUTH_PAGE.includes(to.path)) {
    return abortNavigation();
  }

  if (token.value && to.path == '/') {
    return navigateTo('/dashboard');
  }
});
