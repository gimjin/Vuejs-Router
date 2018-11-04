import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 全局数据集，可响应式修改界面已绑定数据
export default new Vuex.Store({
  // 不要在发布环境下启用严格模式！**严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
  strict: process.env.NODE_ENV !== 'production',
  state: {
    // 所有加载的数据存储到 agentsData管理
    agentsData: []
  },
  // mutations 可以理解成SQL语句，针对state库的操作
  mutations: {
    // 加载request-page=n.json数据至agentsData
    loadAgentsData: function(state, agents) {
      state.agentsData = state.agentsData.concat(agents)
    },
    // 移除agent中指定resource
    removeResource: function(state, payload) {
      state.agentsData[payload.id].resources.splice(payload.index, 1)
    },
    // 批量增加指定agent的resource
    addResources: function(state, payload) {
      state.agentsData[payload.id].resources = state.agentsData[payload.id].resources.concat(payload.res)
    }
  },
  // action 比 mutations 关注数据业务逻辑，并且可以使用异步操作
  actions: {
    actionLoadAgentsData: function({commit}, payload) {
      commit('loadAgentsData', payload)
    },
    actionRemoveResource: function({commit}, payload) {
      commit('removeResource', payload)
    },
    actionAddResources: function({commit}, payload){
      commit('addResources', payload)
    }
  },
  getters: {
    filterAgents: (state) => (type) => {
      if (type == 'all') {
        // 返回所有数据
        return state.agentsData
      } else {
        // 过滤数组，根据type只返回physical 或 virtual
        return state.agentsData.filter(item => item.type == type)
      }
    }
  }
})
