import { getCookie, defineEventHandler, sendRedirect } from 'h3';
import consts from '~/config/consts';

const AUTH_PAGE = ['/auth/login', '/auth/forgot', '/auth/reset'];

export default defineEventHandler((event) => {
  const url = event.path || '/';
  if (/\.[a-zA-Z0-9]+$/.test(url)) {
    return;
  }

  const session = getCookie(event, consts.cookie.name);

  if (!session && !AUTH_PAGE.includes(url)) {
    return sendRedirect(event, '/auth/login', 302);
  }

  if (session && url === '/') {
    return sendRedirect(event, '/dashboard', 302);
  }

  if (session && AUTH_PAGE.includes(url)) {
    return sendRedirect(event, '/dashboard', 302);
  }
});
