const AUTH_PAGE = ['/auth/login', '/auth/forgot', '/auth/reset'];

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.auth && !AUTH_PAGE.includes(to.path)) {
    return abortNavigation();
  }
});
