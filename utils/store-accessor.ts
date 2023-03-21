import { Store } from 'vuex'
import * as NUsers from '../store/users';

// eslint-disable-next-line import/no-mutable-exports
let usersStore: NUsers.StoreModule;

function initialiseStores(store: Store<any>): void {
  store.registerModule(NUsers.STORE_NS, <any>NUsers.StoreModule);
}

export { initialiseStores, usersStore }