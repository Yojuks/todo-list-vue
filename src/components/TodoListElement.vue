<template>
    <div class="wrapper">
        <li v-bind:class="{ active: isActive }" v-if="isEdit" v-on:dblclick="doubleClick()">
            <input type="checkbox" @click="changeColor()" class="checkbox">
            {{ task.title }}

        </li>

        <li v-bind:class="{ active: isActive }" v-else>
            <input type="checkbox" @click="changeColor()" class="checkbox">
            <input type="text" v-model='inputValue' v-on:blur="onEnter(task.id)" v-on:keyup.enter="$event.target.blur()"
                class="input-pressed">
        </li>

        <span class="close" @click="removeTask(task.id)">x</span>
    </div>

</template>
  
<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex'

export default {
    name: 'TodoListElement',
    props: ['task'],
    data() {
        return {
            isActive: false,
            isEdit: true,
            inputValue: this.task.title
        }
    },

    computed: {
        getValue() {
            return this.$store.getters.getEditedValue
        }
    },

    methods: {
        ...mapActions([
            'removeTask',
            'updateTask'
        ]),

        ...mapGetters({ getEditedValue: 'getEditedValue' }),
        changeColor() {
            this.isActive = !this.isActive
        },

        onEnter(taskId) {
            this.isEdit = !this.isEdit
            const title = this.inputValue
            this.updateTask({ taskId, title })

        },

        doubleClick() {
            this.isEdit = !this.isEdit
        },
    }
}
</script>
  
<style scoped>
.active {
    text-decoration: line-through;
}

.wrapper {
    display: flex;
    justify-content: space-between;
    padding: 5px;
}

.checkbox {
    margin-right: 20px;
}

li {
    list-style: none;
}

.close {
    color: red;
}

.input-pressed {
    margin-left: 6px;
    width: 600px;
    height: 20px;
    border: 1px solid #999;
}
</style>
  