<script setup>
import { reactive } from 'vue'
import { useRouter, RouterView } from 'vue-router'
const router = useRouter()
const state = reactive({
  transitionName: 'slide-left',
})

router.beforeEach((to, from) => {
  if (to.meta.index > from.meta.index) {
    state.transitionName = 'slide-left' // 向左滑动
  } else if (to.meta.index < from.meta.index) {
    state.transitionName = 'slide-right' // 向右滑动
  } else {
    state.transitionName = '' // 同级无滑动效果
  }
})
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="less">
html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
