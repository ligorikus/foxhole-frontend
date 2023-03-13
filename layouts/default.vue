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
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class DefaultLayout extends Vue {
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