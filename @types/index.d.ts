import { HttpClient } from '~/api/swagger/Foxhole/http-client';

declare module '~auth/runtime' {
  // Here you declare what you're trying to import from `~auth/runtime`
  export { RefreshScheme } from '@nuxtjs/auth-next'
}

declare module '@nuxt/types' {
  interface Context {
    $api: HttpClient;
  }
}