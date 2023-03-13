<template>
  <NuxtLink :to="route" class="navbar__item">
    <div class="navbar__item-icon">
      <component :is="icon" :size="24" :fill-color="color" />
    </div>
    <div class="navbar__item-label">
      {{ label }}
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class NavBarItem extends Vue {
  @Prop() icon: string;
  @Prop() label: string;
  @Prop() route: string;

  activeColor: string = '#074EE8';

  get active() {
    return this.$route.fullPath === this.route;
  }

  get color() {
    return this.active ? this.activeColor : 'currentColor';
  }
}
</script>
<style lang="scss">
.navbar__item {
  display: flex;
  height: 48px;
  align-items: center;

  &.nuxt-link-active {
    background-color: #E0EAFF;
    color: #074EE8;
  }

  padding: 6px 0 6px 16px;
  &-icon {
    margin-right: 8px;
  }
  &-label {
    font-size: 16px;
    font-family: 'Ubuntu Mono';
  }
}
</style>