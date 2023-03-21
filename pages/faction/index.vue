<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator';

@Component({
  middleware: ['auth'],
  layout: 'empty'
})
export default class FactionPage extends Vue {
}
</script>
