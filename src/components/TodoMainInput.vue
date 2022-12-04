<template>
  <div class="container">
    <NewTask />
    <TodoList />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import NewTask from '../components/NewTask.vue';
import TodoList from '../components/TodoList.vue';

export default {
  name: 'TodoMainInput',
  props: {
    msg: String
  },

  components: {
    NewTask,
    TodoList
  },

  data() {
    return {
      inputText: '',
      tasks: []
    }
  },

  mounted() {
    try {
      this.$store.dispatch('fetchTasks')
    } catch (error) {
      throw new Error(error);
    }
  },

  methods: {
    ...mapActions([
      'addNewTask',
      'removeTask',
    ]),
  }
}
</script>

<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
}
</style>
