<template>
  <div class="auth__container">
    <div class="auth__container-block">
      <div class="auth__container-block_header">
        Авторизация
      </div>
      <div class="auth__container-block_body">
        <a href="http://localhost:8000/api/v1/auth/steam">
          <img class="auth__container-block_body-steam" src="https://community.cloudflare.steamstatic.com/public/images/signinthroughsteam/sits_01.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator';
 
@Component({
  layout: 'empty',
})
export default class AuthPage extends Vue {
  mounted() {
    if (this.$route.query.token !== undefined && this.$route.query.user_id) {
      this.$auth.loginWith('local', { data : {
        token: this.$route.query.token,
        user_id: this.$route.query.user_id
      }});
    }
  }
}
</script>
<style lang="scss" scoped>

.form-item {
  display: flex;
  padding: 16px 0px 0px 16px;
  
  label {
    font-size: 1.4em;
    width: 160px;
    margin-right: 10px;
    text-align: right;
  }
}
.text-input {
  box-sizing: border-box;
  border: 2px solid #AAAAAA;
  border-radius: 4px;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  background-color: #074EE8;
  color: #FFFFFF;
  width: 160px;
  height: 40px;
  border-radius: 5px;
  border: 0px;

  cursor: pointer;
}

.auth__container {
  display: grid;
  margin: 0;
  padding: 0;
  height: 100vh;

  grid-template-columns: auto 480px auto;
  grid-template-rows: 20vh auto 20vh;

  &-block {
    grid-column-start: 2;
    grid-column-end: 3;

    grid-row-start: 2;
    grid-row-end: 3;

    &_header {
      max-height: 60px;
      background-color: #EEEEEE;
      font-size: 2em;

      padding: 24px;
      
      border: 2px solid #AAAAAA;
      border-radius: 5px 5px 0 0
    }

    &_body {
      background-color: #FFFFFF;
      height: 200px;
      border: 2px solid #AAAAAA;
      border-top: 0px;
      border-radius: 0 0 5px 5px;
      &-steam {
        margin: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>