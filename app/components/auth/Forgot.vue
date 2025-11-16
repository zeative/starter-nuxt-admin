<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui';
import Brand from '~/components/shared/Brand.vue';

const toast = useToast();

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Masukan email...',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Masukan password...',
    required: true,
  },
  {
    name: 'remember',
    label: 'Remember me',
    type: 'checkbox',
  },
];

const schema = z.object({
  email: z.email('Email tidak valid!'),
  password: z.string('Password wajib diisi!').min(8, 'Masukan minimal 8 karakter!'),
});

type Schema = z.output<typeof schema>;

function onSubmit(payload: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Berhasil ✅',
    description: 'Akun valid! Anda akan diarahkan ke Dashboard.',
  });
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-dvh gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Login"
        description="Enter your credentials to access your account."
        icon="i-lucide-user"
        :fields="fields"
        @submit="onSubmit"
      >
        <template #header>
          <div class="flex mx-auto">
            <Brand />
          </div>
          <h1 class="mt-6 mb-4 tracking-wider font-bold text-xl text-primary">Selamat datang Admin ~</h1>
          <USeparator class="mb-3" />
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
