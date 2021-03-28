<template>
  <loading :loading="loading">
    <router-view />
  </loading>
</template>

<script>
import {Loading} from '_c'
import {useStore} from 'vuex'
import {computed, defineComponent} from 'vue'
  export default defineComponent ({
    name: 'app',
    components: {
      Loading
    },
    setup() {
      const store = useStore()
      let loading = computed(() => store.state.loading)
        return {loading}
    }
  })
</script>

<style lang="scss">
</style>