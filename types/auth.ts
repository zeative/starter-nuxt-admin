import type { EventHandlerRequest, H3Event } from 'h3';

export type AuthenticationHandler = {
  login: (props: H3Event<EventHandlerRequest>) => Promise<object>;
  register: (props: H3Event<EventHandlerRequest>) => Promise<object>;
  forgot: (props: H3Event<EventHandlerRequest>) => Promise<object>;
  reset: (props: H3Event<EventHandlerRequest>) => Promise<object>;
};
