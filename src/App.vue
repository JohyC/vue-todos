<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import layouts from './components/layouts.vue'

export default {
  components: { layouts },
  name: 'App'
}
</script>

<style>
@import './common/icon/iconfont.css';
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ff8ea3;
  background-image: linear-gradient(-45deg, #ff8ea3, #8a7ea9);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
a {
  color: #fff;
}
a,
a:hover {
  text-decoration: none;
  user-select: none;
  cursor: pointer;
}
.clearfix::before,
.clearfix::after {
  content: '';
  clear: both;
}
</style>
