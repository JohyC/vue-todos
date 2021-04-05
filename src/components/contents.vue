<template>
  <div class="todo" v-if="todo">
    <nav class="todo-title">
      <div class="nav-group">
        <a class="nav-item">
          <i class="iconfont">&#xe62b;</i>
        </a>
      </div>
      <h1 class="title" :class="{ show }" @dblclick="changeShow()">
        {{ todo.title }}
      </h1>
      <input
        class="title-input"
        :class="{ show: !show }"
        :placeholder="todo.title"
        @keyup.enter="changeTitle(todo, $event)"
        v-model="todo.title"
      />
      <div class="options">
        <i
        class="iconfont"
        @click="isLock = !isLock"
        :class="isLock ? 'icon-lock' : 'icon-unlock'"
        ></i>
        <i
        class="iconfont"
        @click="del(todo)">&#xe672;</i>
      </div>
      <div class="add">
        <i class="iconfont">&#xe624;</i>
        <input
          class="input"
          placeholder="请输入"
          :disabled="isLock"
          @keyup.enter="addText(todo, $event)"
        />
      </div>
    </nav>
    <div class="todo-content">
      <div
        class="content-list"
        v-for="(item, index) in todo.content"
        :key="index"
      >
        <i
          class="iconfont left"
          :class="item.completed ? 'icon-checkbox' : 'icon-check-box-outline-bl'"
          @click="isCompleted(todo, index)"
        ></i>
        <span :class="{ completed: item.completed }">{{ item.text }} </span>
        <i
        class="iconfont right"
        @click="delText(todo, index)"
        v-show="!isLock"
        >&#xe672;</i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'contents',
  data: function () {
    return {
      show: false,
      isLock: false
    }
  },
  computed: {
    ...mapGetters(['todo'])
  },
  methods: {
    changeShow () {
      this.show = !this.show
    },
    changeTitle (todo, e) {
      this.$store.commit('changeTitle', { todo, e })
      this.changeShow()
    },
    addText (todo, e) {
      this.$store.commit('addText', { todo, e })
      e.target.value = ''
    },
    del (todo) {
      this.$store.commit('del', todo)
    },
    delText (todo, index) {
      this.$store.commit('delText', { todo, index })
    },
    isCompleted (todo, index) {
      this.$store.commit('isCompleted', { todo, index })
    }
  },
  watch: {
    isLock () {
      this.$store.commit('isLock', this.todo)
    }
  }
}
</script>

<style lang="css">
@import '../common/style/content.css';
</style>
