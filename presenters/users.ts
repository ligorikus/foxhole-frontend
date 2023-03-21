import { Store } from 'vuex';
import { IContext, initialState, IPresenter, IPresenters, IService, STORE_NS, TBaseServiceParameters, TState } from '~/domain/users';
import { VuexObservable } from '~/types/vuex';
import * as TModule from '~/store/users';
import { Service } from '~/services/users';

class Presenter
  extends VuexObservable<TState, TModule.StoreModule>
  implements IPresenter
{
  constructor(store: Store<TState>, private service: IService) {
    super(store, initialState(), STORE_NS);
  }

  async onLoadUsersMe(): Promise<void> {
    const user = await this.service.getMe();
    this.onChangeState({ user });
  }
}

export const createPresenter = (
  store: Store<TState>,
  serviceParams: TBaseServiceParameters
) => {
  const service = new Service(...serviceParams);
  return new Presenter(store, service);
};

const createPresenters = (
  store: Store<any>,
  serviceParams: TBaseServiceParameters
): IPresenters => {
  const presenters: IContext = {
    usersPresenter: createPresenter(store, serviceParams)
  };

  return presenters;
};

export default createPresenters;
