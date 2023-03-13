<template>
  <div class="navbar">
    <nav-bar-item 
      icon="IconArchiveOutline" 
      label="Склады" 
      route="/storage"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import NavBarItem from './_NavBarItem.vue';

@Component({
  components: {
    NavBarItem
  }
})
export default class NavBar extends Vue {
}
</script>
<style lang="scss">
.navbar {
  width: 271px;
  max-width: 271px;
  height: calc(100vh - 57px);

  border-width: 0px 3px 0px 0px;
  border-style: solid;
  border-color: #AAAAAA;

  &.icon-only {
    width: 56px;
  }
}
</style>