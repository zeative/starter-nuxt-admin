<template>
   <AuthLogin v-if="$route.params.auth?.join('/') == 'auth/login'" />
</template>
