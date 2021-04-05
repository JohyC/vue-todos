<template>
  <div class="layouts">
    <section class="menu">
      <menus :itemLists="itemLists"></menus>
    </section>
    <section class="content">
      <contents></contents>
    </section>
  </div>
</template>

<script>
import menus from './menus'
import contents from './contents'
import { mapState } from 'vuex'

export default {
  name: 'layouts',
  components: {
    menus,
    contents
  },
  computed: {
    ...mapState({
      itemLists: state => state.itemLists
    })
  }
}
</script>

<style>
@import '../common/style/layouts.css';
</style>
