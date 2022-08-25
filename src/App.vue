<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <left-menu></left-menu>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LeftMenu from './views/menu/index.vue'
console.log(LeftMenu, 'LeftMenu')
export default defineComponent({
  components: {
    LeftMenu
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
</style>
