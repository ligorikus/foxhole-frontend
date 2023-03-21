import { Mutation } from "vuex-module-decorators";
import assign from 'lodash/assign';
import { Store } from 'vuex';

export interface IStoreModule<T> {
  onSetState(newState: T): void;
}

export default class BaseVuexModule<T> implements IStoreModule<T> {
  internalState: T;

  @Mutation
  public onSetState(newState: T): void {
    assign(this.internalState, newState);
  }
}

export interface IVuexObservable<T = any, M extends BaseVuexModule<T> = any> {
  state: T;
  onResetState(): void;
  onChangeState(
    mutationState: Partial<T> | T[keyof T],
    mutation?: keyof M
  ): void;
}

export class VuexObservable<T, M extends BaseVuexModule<T>>
  implements IVuexObservable<T, M>
{
  // eslint-disable-next-line no-useless-constructor
  constructor(
    protected store: Store<T>,
    protected initialState: T,
    protected namespace?: string,
    protected stateFieldName: string = 'internalState'
  ) {}

  onResetState(): void {
    this.onChangeState({ ...this.initialState });
  }

  get state(): T {
    if (this.namespace) {
      if (this.stateFieldName) {
        return (this.store.state as any)[this.namespace][this.stateFieldName];
      }
      return (this.store.state as any)[this.namespace];
    }
    return this.store.state;
  }

  onChangeState(
    mutationState: Partial<T> | T[keyof T],
    mutation: keyof M = 'onSetState'
  ): void {
    this.store.commit(`${this.namespace}/${String(mutation)}`, mutationState);
  }
}

export type TFetchState = {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  statusCode?: number;
};