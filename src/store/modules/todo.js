const STORAGE_KEY = 'waizly-todos'

const state = {
     todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

const mutations = {
     addTodo(state, todo) {
          state.todos.push(todo)
     },
     removeTodo(state, todo) {
          state.todos.splice(state.todos.indexOf(todo), 1)
     },
     editTodo(state, { todo, name = todo.name, done = todo.done }) {
          todo.name = name
          todo.done = done
     }
}

const actions = {
     addTodo({ commit }, payload) {
          commit('addTodo', {
               uid: Date.now(),
               name: payload.name,
               done: payload.done
          })
     },
     removeTodo({ commit }, todo) {
          commit('removeTodo', todo)
     },
     toggleTodo({ commit }, todo) {
          commit('editTodo', { todo, done: !todo.done })
     },
     editTodo({ commit }, { todo, payload }) {
          commit('editTodo', { todo, payload })
     },


}

const plugins = [store => {
     store.subscribe((mutation, { todos }) => {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
     })
}]

const getters = {
     allTodos: state => state.todos,
     activeTodos: state => state.todos.filter(todo => !todo.done),
     completedTodos: state => state.todos.filter(todo => todo.done)
}

export default {
     state,
     mutations,
     actions,
     getters,
     plugins
}