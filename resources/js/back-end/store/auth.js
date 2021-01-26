export const auth = {
   state: {
      isLoggedIn: false ,
      user : ""   
 },
   mutations: {
      setIsLoggedIn(state , payload) {
         state.isLoggedIn = payload;
      },
      setUser(state , payload) {
         state.user = payload;
      }
 },
   actions: {
      async getUser({ commit }) {
         const { data } = await axios.get("/user");
         commit('setUser', data);
      }
   }
 }
