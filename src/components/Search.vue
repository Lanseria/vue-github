<template>
  <div>
    <div v-if="loading">
      <span v-show="loading">Loading...</span>
    </div>
    <div v-else-if="error">
      <span v-show="error">Error: {{error.message}}</span>
    </div>
    <div v-else>
      <h1>Most Popular {{text}} Projects in Github</h1>
      <el-collapse v-model="activeName" v-for="(repo, index) in repos" :key="index" accordion>
        <el-collapse-item :title="repo.name" :name="index">
          <label>链接</label>
          <a :href="repo.html_url" target="_blank">{{repo.html_url}}</a>
          ({{repo.stargazers_count}} stars)
          <br/>
          <label>描述</label>
          <div>{{repo.description}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: '1'
    }
  },
  computed: {
    repos() {
      return this.data
    },
    text() {
      return this.$store.state.text
    },
    data() {
      return this.$store.state.data
    },
    error() {
      return this.$store.state.error
    },
    loading() {
      return this.$store.state.loading
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(url=this.$route.params.text) {
      fetch(`https://api.github.com/search/repositories?q=${url}&sort=stars`)
        .then(res => res.json())
        .then(
        value => {
          console.log(value)
          this.$store.commit('updatedata', value)
        },
        err => {
          this.$store.commit('updateerr', err);
        }
        )
    }
  }
}
</script>
<style lang="stylus" scoped>
h1
  margin-bottom 20px
  font-size 30px
  font-weight 500
.project
  margin-bottom 10px
</style>
