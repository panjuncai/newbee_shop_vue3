<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter, RouterView } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    index: number
  }
}

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
  <RouterView />
</template>

<style lang="less">
.router-view {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.van-badge--fixed {
  z-index: 1000;
}
</style>
