import auth from '../../../app/config/auth';

const ROUTES = [
  ['login', 'POST'],
  ['register', 'POST'],
  ['forgot', 'POST'],
  ['reset', 'POST'],
];

export default defineEventHandler((event) => {
  const slug = event.context.params?.slug;
  const route = ROUTES.find(([path, method]) => path === slug && method === event.method);

  if (!route) {
    return createError({
      statusCode: 404,
      message: 'Invalid Auth Route',
    })
  }

  const handler = route[0] as keyof typeof auth;
  return auth[handler](event);
});
