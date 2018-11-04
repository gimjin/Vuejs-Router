// 单元测试Vuex store数据操作是否正常
import {
  createLocalVue
} from '@vue/test-utils'
import store from '../../src/store/index.js'

const localVue = createLocalVue()

test('agentsData数据类型是否是Array，默认状态是否为空', () => {
  // 断言agentData数据类型为数组
  expect(Object.prototype.toString.call(store.state.agentsData)).toBe('[object Array]')
  // 断言默认数据为空
  expect(store.state.agentsData.length).toBe(0)
})

test('载入两组数据，agentsData长度变成2', () => {
  const data = [{
    "id": 0,
    "url": "bjstdmngbgr0.thoughtworks.com",
    "type": "physical",
    "state": "building",
    "server": "192.168.126.116",
    "path": "/var/lib/cruise-agent",
    "resources": ["ubuntu", "firefox3"]
  }, {
    "id": 1,
    "url": "bjstdmngbgr1.thoughtworks.com",
    "type": "virtual",
    "state": "idle",
    "server": "192.168.8.221",
    "path": "/var/lib/cruise-agent",
    "resources": ["ubuntu", "firefox3", "core-duo"]
  }]

  // 载入数据
  store.commit('loadAgentsData', data)
  // 数据载入成功，长度变为2
  expect(store.state.agentsData.length).toBe(2)
})

test('增加agent的resources，验证最后一个resource名称', () => {
  // mutations方法，给id=0的agent增加resources
  store.commit('addResources', {
    'id': 0,
    'res': ['mysql', 'core-duo']
  })
  // getters 验证id=0的agent resources最后一个资源名
  expect(store.getters.filterAgents('all')[0].resources[3]).toBe('core-duo')
})

test('删除agent的resources第一个资源，验证是否删除成功', () => {
  // actions方法，删除id=1 resources第一个资源ubuntu
  store.dispatch('actionRemoveResource', {
    'id': '1',
    'index': '0'
  })
  // getters 检查第一个资源名是否不是ubuntu
  expect(store.getters.filterAgents('all')[1].resources[0]).not.toBe('ubuntu')
})
