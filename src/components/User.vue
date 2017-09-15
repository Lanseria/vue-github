<template>
  <div class="box">
    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box"> User {{$route.params.id}}</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true
  })
}
</script>

<style lang="stylus" scoped>
.box
  text-align center
.transition-box
  width 200px
  height 100px
  border-radius 4px
  background-color #20A0FF
  text-align center
  color #fff
  padding 40px 20px
  box-sizing border-box
</style>

