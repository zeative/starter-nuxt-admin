import type { AuthenticationHandler } from '../../types/auth';
import consts from './consts';

export default {
  login: async (props) => {
    const body = await readBody(props);

    const data = {
      email: 'kejaa@sukoharjokab.go.id',
      password: 'kejaa3421',
    };

    if (body.email !== data.email || body.password !== data.password) {
      return createError({
        statusCode: 401,
        message: 'Email atau password salah',
      });
    }

    setCookie(props, consts.cookie.name, 'testt', consts.cookie.options);
    return { ok: true };
  },
  register: async (props) => {
    return { slug: props.context.params?.slug, from: 'register' };
  },
  forgot: async (props) => {
    return { slug: props.context.params?.slug, from: 'forgot' };
  },
  reset: async (props) => {
    return { slug: props.context.params?.slug, from: 'reset' };
  },
} satisfies AuthenticationHandler;
