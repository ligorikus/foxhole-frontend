<template>
  <div class="main">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class Main extends Vue {
  mounted() {
    if (this.$route.query.token !== undefined && this.$route.query.user_id) {
      this.$auth.loginWith('local', { data : {
        token: this.$route.query.token,
        user_id: this.$route.query.user_id
      }}).then(() => { 
        window.location.href = '/'
      });
    }
  }
}
</script>
<style lang="scss">
</style>
