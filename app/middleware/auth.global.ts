import consts from '~/config/consts';

const AUTH_PAGE = ['/auth/login', '/auth/forgot', '/auth/reset'];

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie(consts.cookie.name);

  if (!token.value && !AUTH_PAGE.includes(to.path)) {
    return navigateTo('/auth/login');
  }

  if (token.value && to.path === '/') {
    return navigateTo('/dashboard');
  }

  if (token.value && AUTH_PAGE.includes(to.path)) {
    return navigateTo('/dashboard');
  }
});