<template>
  <div id="app">
    <header class="header">
      <h1>
        <router-link to="/">GitHub</router-link>
      </h1>
      <el-input class="search" v-model="text" placeholder="Search" icon="search" :on-icon-click="handleIconClick" @keyup.enter.native="handleIconClick"></el-input>
    </header>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      text: this.$store.state.text
    };
  },
  methods: {
    handleIconClick() {
      this.$store.commit('updatetext', this.text)
      this.$router.push(`/s/${this.text}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
  #app
    width 100%
  .header
    display flex
    align-self center
    background-color #324157
    h1
      line-height 60px
      font-size 24px
      color #eee
      flex 0 0 100px
    .search
      flex 1
      margin 12px 
    .nav-menu
      float right 
  .container
    width 980px
    margin 10px auto

</style>

