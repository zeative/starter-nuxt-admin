<script setup>
const route = useRoute();
const auth = route.params?.auth?.join?.('/');

const PATHS = ['auth/login', 'auth/forgot', 'auth/reset'];

if (auth && !PATHS.includes(auth)) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}
</script>

<template>
  <AuthLogin v-if="auth == 'auth/login'" />
  <AuthForgot v-if="auth == 'auth/forgot'" />
  <AuthReset v-if="auth == 'auth/reset'" />
</template>
