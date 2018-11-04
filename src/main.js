import Vue from 'vue'
import App from './App.vue'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(iView)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  store // 可以在所有子组件export default{}内部用 this.$store.调用
})
