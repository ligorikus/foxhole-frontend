import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import users from '~/store/users'

// eslint-disable-next-line import/no-mutable-exports
let usersStore: users

function initialiseStores(store: Store<any>): void {
  usersStore = getModule(users, store)
}

export { initialiseStores, usersStore }