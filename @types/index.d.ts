import { Auth } from '@nuxtjs/auth-next'
import { IPresenterPlugin } from '~/plugins/presenter';

declare module 'vue/types/vue' {
  interface Vue {
    $presenter: IPresenterPlugin;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $presenter: IPresenterPlugin;
    $auth: Auth;
  }
  interface Context {
    $presenter: IPresenterPlugin;
    $auth: Auth;
  }
}

declare module '~auth/runtime' {
  export { RefreshScheme } from '@nuxtjs/auth-next'
}