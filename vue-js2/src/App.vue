<template>
  <div>
  <pre>
    {{todos}}
  </pre>
    <todos v-model="todos"></todos>
    <todos v-model="todos"></todos>
    <todos></todos>
    <button @click="addTodo">Ajouter une tache</button>
  </div>
</template>

<script>
import Todos from './components/Todos'

export default {
  name: 'App',
  data () {
    return {
      todos: [{
        name: 'Demo',
        completed: true
      }]
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        name: 'Jean',
        completed: false
      })
    }
  },
  components: {
    Todos
  }
}
</script>
