import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import news from './news'
import games from './games'

const LayoutComponent = {
  template: `
    <div>
      <h1>Layout</h1>
      <p>Router test</p>
      <div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  `
}

const OtherComponent = {
  template: `
    <div>
      <h1>Other</h1>
      <p>Other test</p>
    </div>
  `
}

export default new VueRouter({
  routes: [{
    path: '/',
    components: {
      default: LayoutComponent,
      other: OtherComponent
    },
    children: [news, games]
  }]
})
