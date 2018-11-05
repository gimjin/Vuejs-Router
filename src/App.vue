<template>
<div id="app">
  <div>
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/news/20181111">news 20181111</router-link></li>
      <li><router-link to="/news/20170101">news 20170101</router-link></li>
      <li><router-link to="/games/王者荣耀">王者荣耀</router-link></li>
      <li><router-link to="/games/海岛奇兵">海岛奇兵</router-link></li>
    </ul>
    <router-view></router-view>
    <hr>
    <router-view name="other"></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
