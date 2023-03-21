<template>
  <div id="page">
    <div class="default__container">
      <layout-header />
      <layout-nav-bar />
      <layout-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator';
import { IPresenters } from '~/domain/users';
import { STORE_NS as STORE_NS_USERS } from '~/store/users';
import { User } from '~/domain/users';

@Component
export default class DefaultLayout extends Vue {
  @State(state => state.auth.loggedIn) loggedIn: boolean;
  @State(state => state[STORE_NS_USERS].internalState.user) user: User;
  presenters: IPresenters

  async created() {
    // @ts-ignore
    this.presenters = this.$presenter.usersInstance;
    if (this.loggedIn) {
      await this.presenters.usersPresenter.onLoadUsersMe();
      if (!this.user.faction) {
        this.$router.push('faction');
      }
    }
  }
}
</script>
<style lang="scss">
body {
  margin: 0 !important;
  padding: 0 !important;
}

#page {
  display: grid;
  background-color: #FFFFFF;
}

.default__container {
  grid-template-columns: 271px auto;
  grid-template-rows: 48px auto;
}

a {
  outline: none;
  text-decoration: none;
  color: #000000;
}
</style>