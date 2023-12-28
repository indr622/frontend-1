import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import todo from './modules/todo'

Vue.use(Vuex)
const secureLS = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: 'vue-cart-persist'
});
const persistState = createPersistedState({
  key: 'waizly-application',
  storage: {
    getItem: (key) => secureLS.get(key),
    setItem: (key, value) => secureLS.set(key, value),
    removeItem: (key) => secureLS.remove(key),
  },
});

export default new Vuex.Store({
  modules: {
    todo
  },
  plugins: [persistState],
})
