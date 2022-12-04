<template>
    <div>
        <ul>
            <TodoListElement v-for="task in tasks" :key="task.id" :task="task" />
        </ul>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex';
import TodoListElement from '../components/TodoListElement.vue';
import { mapGetters } from 'vuex'

export default {
    name: 'TodoList',
    computed: {
        ...mapGetters({
            tasks: 'getAllTasks'
        })
    },

    methods: {
        ...mapActions([
            'removeTask',
        ]),
    },

    components: {
        TodoListElement,
    },
}
</script>
  
<style scoped >
ul {
    padding: 0;
}
</style>
  