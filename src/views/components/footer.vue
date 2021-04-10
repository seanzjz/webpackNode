<template>
  <div>
      <footer>{{footerSpan}}</footer>
  </div>
</template>
<script>
import {ref, reactive} from 'vue'
export default {
  name: 'SectionFooter',
  setup(props, cxt) {
    let footerSpan = ref('脚步')
    return {
      footerSpan
    }
  }
}
</script>
<style lang="less" scoped>
footer{
  width: 100%;
  height: 50px;
  background: red;
}
</style>