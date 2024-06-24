import { createStore } from 'vuex'

export default createStore({
  state: {
    cars:null,
    gaming_consoles:null,
    friends:null

  },
  // getters: {
  // },
  mutations: {
    setCars(state,payload){
      state.cars=payload
    },
    setGaming_Consoles(state,payload){
      state.gaming_consoles=payload
    },
    setFriends(state,payload){
      state.friends=payload
    },
  },
  actions: {
    async getGaming_consoles(gaming_consoles){
      let fetchedInfo =await fetch ('https://mquanaazi.github.io/myFriendsData/json/data.json')
      let converted= await fetchedInfo.json()
      console.log(converted);
      gaming_consoles.commit('setGaming_Consoles',converted.gaming_consoles)
    },
    async getFriends({commit}){
      let fetchedInfo = await fetch('https://mquanaazi.github.io/myFriendsData/json/data.json')
      let data =await fetchedInfo.json()
      // dependant on json file
      console.log(data);
      let {cars,gaming_consoles,friends} =  data
      // console.log(AboutMe,Projects,education,skills,workExp,testimonials)
      commit('setCars',cars)
      commit('setGaming_Consoles',gaming_consoles)
      commit('setFriends',friends)
      
    }
  },
  modules: {
  }
})
