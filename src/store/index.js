import { createStore } from 'vuex'

export default createStore({
  state: {
    cars:null,
    friends:null,
    console:null
  },
  getters: {
  },
  mutations: {
    setCars(state,payload){
      state.cars = payload
    },
    setFriends(state,payload){
      state.friends = payload
    },
    setConsole(state,payload){
      state.console = payload
    },
  },
  actions: {
    async getData({commit}){
      let fetchInfo = await fetch ('https://mrshane06.github.io/JSON/data/data.json')
      let data = await fetchInfo.json()
      let {cars,friends,console} = data
      commit('setCars',cars)
      commit('setFriends',friends)
      commit('setConsole',console)
    }
  },
  modules: {
  }
})
