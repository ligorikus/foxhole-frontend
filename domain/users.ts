import type { User } from "~/api/swagger/Foxhole/data-contracts";
import { Service as UserService } from "~/services/users";
import { IVuexObservable, TFetchState } from "~/types/vuex";

export { User };

export interface IService {
  getMe(): Promise<User>;
}

export interface IPresenter extends IVuexObservable {
  onLoadUsersMe(): Promise<void>;
}

export interface IContext {
  usersPresenter: IPresenter
}
export type IPresenters = IContext;

export type TBaseServiceParameters = ConstructorParameters<typeof UserService>;

export type TState = TFetchState & {
  user: User
};

export const initialState = (): TState => ({
  isLoading: false,
  isError: false,
  statusCode: 200,
  errorMessage: '',

  user: {} as User
});

export const STORE_NS = 'foxhole/users';