<template>
  <div class="item-lists">
    <a
      class="item-list"
      v-for="(item, index) in itemLists"
      :key="index"
      :class="{ active: item.active }"
      @click="active(item)"
    >
      <i class="iconfont" v-show="item.locked">&#xe690;</i>
      <span class="item-text">{{ item.title }}</span>
      <span class="completed-count" v-show="item.count !== 0"
        >{{ item.count }}
      </span>
    </a>
    <a class="new-item-list" @click="add()">
      <i class="iconfont">&#xe649;</i>
      <span>新增</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'menus',
  props: ['itemLists'],
  methods: {
    active (item) {
      this.$store.commit('active', item)
    },
    add () {
      this.$store.commit('add')
    }
  }
}
</script>

<style lang="css">
@import '../common/style/menus.css';
</style>
