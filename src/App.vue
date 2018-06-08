<template>
  <div id="app">
    <!-- 头部header -->
    <v-header></v-header>
    <!-- 主题main -->
    <router-view></router-view>
    <!-- 底部footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '@/components/Header/Header'
import footer from '@/components/Footer/Footer'

export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<style>
body,html{
  margin:0;
  padding:0;
  box-sizing:border-box;
  background:#f0f0f0f0;
  user-select:none;
  -webkit-tap-highlight-color: transparent;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
