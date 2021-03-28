<template>
  <div class="home" @click="clickHander"><a-button>首页</a-button></div>
</template>

<script>
import http from '@/api'
export default {
  name:'home',
  setup(props, ctx) {
    const clickHander = () => {
      http.dynamicApi('/api/sdf/jlk',{aaa:243,sd:'sdf'})
      http.userGetSelfUser({aaa:243,sd:'sdf'})
    }
    return {clickHander}
  },
    
}
</script>

<style lang="scss"  scoped>
.home {
  height: 500px;
  line-height: 500px;
}
</style>