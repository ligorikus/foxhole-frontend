import { HttpClient } from '~/api/swagger/Foxhole/http-client';

// eslint-disable-next-line import/no-mutable-exports
let $api: HttpClient

export function initializeApi(apiInstance: HttpClient) {
  $api = apiInstance
}

export { $api }