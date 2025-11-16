<script setup>
const route = useRoute();
const auth = route.params.auth.join('/');
</script>

<template>
  <AuthLogin v-if="auth == 'auth/login'" />
  <AuthForgot v-if="auth == 'auth/forgot'" />
  <AuthReset v-if="auth == 'auth/reset'" />
</template>
