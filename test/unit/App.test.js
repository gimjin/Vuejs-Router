// 单文件组件单元测试
// 因为工具无法识别iView标签(如：Button，Icon等)原因无法验证交互
import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import App from '../../src/App.vue'

// store 传递给一个 localVue，而不是传递给基础的 Vue 构造函数。
// localVue 是一个独立作用域的 Vue 构造函数，我们可以对其进行改动而不会影响到全局的 Vue 构造函数。
const localVue = createLocalVue()

describe('App.vue', () => {
  it('Logo位置是否正确渲染Cruise文本', () => {
    // shallowMount 方法只挂载一个组件而不渲染其子组件
    // https://vue-test-utils.vuejs.org/zh/api/options.html#context
    const wrapper = shallowMount(App)
    // 选择id=“logo”的DOM
    // https://vue-test-utils.vuejs.org/zh/api/selectors.html
    const logo = wrapper.find('#logo')
    // 断言已选择DOM内部文本是否是 Cruise
    expect(logo.text()).toBe('Cruise')
  })
})
