<template>
  <div class="hello">
    Page{{count}}
    <el-button @click="increment">+</el-button>
    <br />
    {{msg}}
  </div>
</template>

<script>

export default {
  name: 'hello',
  // state
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>

