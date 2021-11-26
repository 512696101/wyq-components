import { createStore } from "vuex";
import userInfo from './modules/userInfo'
import getters from './getters';
export default createStore({
  getters,
  modules: {
    userInfo
  },
})
