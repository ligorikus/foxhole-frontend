<template>
  <div class="header">
    <div></div>
    <header-user />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import HeaderUser from './_HeaderUser.vue';

@Component({
  components: {
    HeaderUser
  }
})
export default class Header extends Vue {
}
</script>
<style lang="scss">
.header {
  display: flex;

  grid-column-start: 1;
  grid-column-end: 3;

  height: 48px;
  max-height: 48px;
  
  border-width: 0px 0px 3px 0px;
  border-style: solid;
  border-color: #AAAAAA;

  justify-content: space-between;
}
</style>