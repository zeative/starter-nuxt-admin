<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui';
import Brand from '~/components/shared/Brand.vue';

const toast = useToast();

const fields: AuthFormField[] = [
  {
    name: 'old_password',
    label: 'Password lama',
    type: 'password',
    placeholder: 'Masukan password lama...',
    required: true,
  },
  {
    name: 'new_password',
    label: 'Password baru',
    type: 'password',
    placeholder: 'Masukan password baru...',
    required: true,
  },
  {
    name: 'confirm_new_password',
    label: 'Ulangi password baru',
    type: 'password',
    placeholder: 'Konfirmasi password baru...',
    required: true,
  },
];

const schema = z.object({
  old_password: z.string('Password lama wajib diisi!').min(8, 'Masukan minimal 8 karakter!'),
  new_password: z.string('Password baru wajib diisi!').min(8, 'Masukan minimal 8 karakter!'),
  confirm_new_password: z.string('Konfirmasi password wajib diisi!').min(8, 'Masukan minimal 8 karakter!'),
}).refine((data) => data.new_password === data.confirm_new_password, {
  message: 'Password baru dengan konfirmasi password tidak sama!',
  path: ['confirm_new_password'],
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
          <h1 class="mt-6 mb-4 tracking-wider font-bold text-xl text-primary">Konfirmasi Reset Password!</h1>
          <USeparator class="mb-3" />
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
