<template>
    <div>
        <div class="main-input">
            <v-text-field v-model="inputText" label="Main input" hide-details="auto" placeholder="Add new task">
            </v-text-field>
            <v-btn depressed elevation="2" raised @click='addNewTaskHandle()'>Add new task</v-btn>
        </div>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    name: 'NewTask',
    data() {
        return {
            inputText: '',
        }
    },
    methods: {
        ...mapActions([
            'addNewTask',
        ]),

        addNewTaskHandle() {
            if (this.inputText.length) {
                const taskNew = {
                    id: new Date().toString(),
                    title: this.inputText,
                    checked: false
                };
                this.addNewTask(taskNew)
            }
            this.inputText = ''
        }
    }
}
</script>
  
<style scoped>
.main-input {
    display: flex;
    align-items: flex-end;
    margin-bottom: 15px;
}
</style>
  