import { PureAbility } from '@casl/ability';
import { abilitiesPlugin } from '@casl/vue';

export default defineNuxtPlugin((nuxtApp) => {
  const ability = new PureAbility();

  const rules = [
    { action: 'read', subject: 'Account' },
    { action: 'write', subject: 'Account' },
    { action: 'read', subject: 'Post' },
  ];

  ability.update(rules);

  nuxtApp.vueApp.use(abilitiesPlugin, ability, {
    useGlobalProperties: true,
  });
});
