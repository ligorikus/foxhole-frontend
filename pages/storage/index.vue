<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator';

@Component({
  middleware: ['auth']
})
export default class IndexPage extends Vue {
}
</script>
