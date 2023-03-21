import { NuxtRouteConfig } from '@nuxt/types/config/router';
import { ApiConfig } from '~/api/swagger/Foxhole/http-client';

export type ResolveExtendRoutes = (...pathSegments: string[]) => string;

export type ExtendRoutes = (
  routes: NuxtRouteConfig[],
  resolve: ResolveExtendRoutes
) => void;

export interface TBreadcrumb {
  text: string;
  to?: { name?: string; path?: string; params?: any } | string;
  useRouter?: boolean;
}

export type TMetaBreadcrumbs = {
  [key: string]: any;
  breadcrumbs: TBreadcrumb[];
};

export type THint = { [key: string]: any };

export type Setter<T> = (val: T | null) => void;
export type Getter<T> = T;
export type Action<T = any, R = any> = (val?: T) => R;
export type TMutation<T = any> = (val?: T) => void;

export type ValueOf<T> = T[keyof T];

export type ApiConstructorTypeOf<T, SecurityDataType> = new (
  apiConfig: ApiConfig<SecurityDataType>
) => T;

export type TRabbitMQOptions = { io: { host: string; path: string } };

