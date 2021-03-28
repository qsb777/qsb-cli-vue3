<template>
  <div class="loading">
    <a-spin :spinning="loading" :delay="delayTime">
      <slot></slot>
    </a-spin>
  </div>
</template>

<script>

export default {
  name: 'loading',
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    delayTime: {
      type: Number,
      default: 500
    }
  },
  setup(props,contenx) {

  }
}
</script>

<style lang="scss">
.loading {
  height: 100%;
  .ant-spin {
    background-color: #e6f7ff;
  }
}
</style>