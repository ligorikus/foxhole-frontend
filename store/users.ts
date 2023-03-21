import { namespace } from 'vuex-class';
import { Module } from 'vuex-module-decorators';
import { initialState, TState } from '~/domain/users';
import BaseVuexModule from '~/types/vuex';

export const STORE_NS = 'foxhole/users';
export const store = namespace(STORE_NS);

@Module({
  stateFactory: true,
  namespaced: true,
})
export class StoreModule extends BaseVuexModule<TState> {
  public internalState: TState = initialState();
}