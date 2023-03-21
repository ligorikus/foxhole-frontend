import http from 'http';
import https from 'https';
import { Auth } from '@nuxtjs/auth-next';
import { ApiConfig } from '~/api/swagger/Foxhole/http-client';
import { ApiConstructorTypeOf } from '~/types/nuxt';

export const getServiceBaseUrl = (baseUrl: string, path: string): string => {
  return baseUrl === '/' ? path : new URL(path, baseUrl).href;
};

/**
 * Так как для запросов node-fetch необходимо указывать полный путь, то добавляем baseUrl всего приложения
 * перед baseUrl каждого сервиса
 * @param baseUrl из nuxt.config
 * @param ApiClass конструктор Api сервиса
 * @param apiConfig конфиг Api для сервиса (не обязателен)
 */
export const createApi = <T extends { baseUrl: string }, SecurityDataType>(
  baseUrl: string,
  ApiClass: ApiConstructorTypeOf<T, SecurityDataType>,
  apiConfig: ApiConfig<SecurityDataType> = {}
) => {
  apiConfig.baseApiParams = {
    ...(apiConfig.baseApiParams || {}),
    agent: createFetchAgent
  } as ApiConfig['baseApiParams'];
  const api = new ApiClass(apiConfig);
  api.baseUrl = getServiceBaseUrl(baseUrl, api.baseUrl);
  return api;
};

export const customFetch: ($auth: Auth) => typeof fetch =
  ($auth) => (input, init) => {
    // @ts-ignore
    const token = $auth.strategy.token.get();
    if (!token) {
      return fetch(input, init);
    }
    if (!init) {
      init = {};
    }
    init.headers = {
      'Authorization': token
    };
    return fetch(input, init);
  };

const rejectUnauthorized = process.env.NODE_TLS_REJECT_UNAUTHORIZED !== '0';
const httpsAgent = new https.Agent({
  rejectUnauthorized
});
const httpAgent = new http.Agent();

/**
 * Отключает проверку SSL сертификата при process.env.NODE_TLS_REJECT_UNAUTHORIZED !== '0'
 */
export const createFetchAgent = (parsedUrl: any) =>
  parsedUrl.protocol.startsWith('http:') ? httpAgent : httpsAgent;
