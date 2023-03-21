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

@Component
export default class HeaderUser extends Vue {
  @State(state => state.auth.loggedIn) loggedIn: boolean;
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