import Vue from "vue";
import Vuex from "vuex";
import todolistModule from "@/store/todolistModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todolistModule
  }
});
