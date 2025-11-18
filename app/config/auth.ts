import type { AuthenticationHandler } from '../../types/auth';

export default {
  login: async (props) => {
    return { slug: props.context.params?.slug, from: 'login' };
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
