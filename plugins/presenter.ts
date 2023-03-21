import { Plugin } from '@nuxt/types';
import { createApi, customFetch } from '~/api/helpers';
import { ApiConfig } from '~/api/swagger/Foxhole/http-client';
import { Users } from '~/api/swagger/Foxhole/Users';
import { IPresenters as IUserPresenters } from '~/domain/users';
import createUsersPresenters from '~/presenters/users';

export interface IPresenterPlugin {
  usersInstance: IUserPresenters;
}

const presenter: Plugin = (context: any, inject: any) => {
  const { $config, store, $auth } = context;
  const { baseUrl } = $config;
  const apiConfig: ApiConfig = {
    customFetch: customFetch($auth)
  };
  let usersInstance: IUserPresenters;
  inject('presenter', {
    get usersInstance(): IUserPresenters {
      if (usersInstance) {
        return usersInstance;
      }

      const api = createApi(baseUrl, Users, apiConfig);
      usersInstance = createUsersPresenters(store, [
        api
      ]);
      return usersInstance;
    }
  });
};

export default presenter;
