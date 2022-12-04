import axios from "axios";

export default {
  state: {
    tasks: []
  },

  mutations: {
    setTasks(state, payload) {
      state.tasks = payload;
    },

    addNewTask(state, payload) {
      state.tasks = [payload, ...state.tasks];
    },

    removeTask(state, taskId) {
      state.tasks = state.tasks.filter((item) => item.id !== taskId);
    },

    updateTask(state, { taskId, title }) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          task = { title: title, id: taskId, cheked: false };
        }
        return task;
      });
    }
  },

  getters: {
    getAllTasks(state) {
      return state.tasks;
    },

    getEditedValue(state) {
      return state.editedValue;
    }
  },

  actions: {
    fetchTasks(context) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=2")
        .then((res) => context.commit("setTasks", res.data));
    },

    addNewTask({ commit }, task) {
      commit("addNewTask", task);
    },

    removeTask({ commit }, taskId) {
      commit("removeTask", taskId);
    },

    updateTask({ commit }, { taskId, title }) {
      commit("updateTask", { taskId, title });
    }
  }
};
