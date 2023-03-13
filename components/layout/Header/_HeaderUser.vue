<template>
  <div class="header__user">
    <IconAccountOutline :size="36" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HeaderUser extends Vue {
}
</script>
<style lang="scss">
.header__user {
  width: 90px;
  display: flex;
  justify-content: right;
  margin: 5px 18px 6px 0px;
}
</style>