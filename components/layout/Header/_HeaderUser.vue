<template>
  <div class="header__user">
    <template v-if="loggedIn">
      <IconAccountOutline :size="36" />
    </template>
    <template v-else>
      <a href="http://localhost:8000/api/v1/auth/steam" class="header__user-login">
        <IconSteam :size="36" />
        <span>ВОЙТИ</span>
      </a>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator';
import { IPresenters } from '../../../domain/users';

@Component
export default class HeaderUser extends Vue {
  @State(state => state.auth.loggedIn) loggedIn: boolean;
  presenters: IPresenters

  async created() {
    // @ts-ignore
    this.presenters = this.$presenter.usersInstance;
    await this.presenters.usersPresenter.onLoadUsersMe();
  }
}
</script>
<style lang="scss">
.header__user {
  width: 90px;
  display: flex;
  justify-content: right;
  margin: 5px 18px 6px 0px;
  
  &-login {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>