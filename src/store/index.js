import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    itemLists: [
      {
        locked: false,
        title: '星期一',
        count: 1,
        active: true,
        content: [
          {
            text: 'todo',
            completed: false
          }
        ]
      }
    ]
  },
  mutations: {
    active (state, item) {
      state.itemLists.map(i => {
        if (i === item) {
          i.active = true
        } else {
          i.active = false
        }
      })
    },
    add (state) {
      let item = {
        locked: false,
        title: 'newTodo',
        count: 0,
        active: false,
        content: [
          {
            text: '',
            completed: false
          }
        ]
      }
      state.itemLists.push(item)
      this.commit('active', item)
    },
    changeTitle (state, {todo, e}) {
      for (let i of state.itemLists) {
        if (i === todo) {
          i.title = e.target.value
          break
        }
      }
    },
    addText (state, {todo, e}) {
      if (e.target.value === '') {
        return
      }
      for (let i of e.target.value) {
        if (i !== ' ') {
          break
        } else {
          return
        }
      }
      for (let i of state.itemLists) {
        if (i === todo) {
          i.content.push({
            text: e.target.value.trim(),
            completed: false
          })
          todo.count++
          break
        }
      }
    },
    del (state, todo) {
      state.itemLists = state.itemLists.filter(i => i !== todo)
    },
    delText (state, {todo, index}) {
      todo.content.splice(index, 1)
      todo.count--
    },
    isCompleted (state, {todo, index}) {
      let boolean = todo.content[index].completed
      todo.content[index].completed = !boolean
    },
    isLock (state, todo) {
      todo.locked = !todo.locked
    },
    menus (state) {
      state.itemLists.menus = !state.itemLists.menus
    }
  },
  getters: {
    todo: state => {
      return state.itemLists.find(i => i.active === true)
    }
  }
})
