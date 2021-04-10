<template>
  <div>
      <div>{{title}}</div>
  </div>
</template>
<script>
import {ref, reactive} from 'vue'
export default {
  name: '大屏',
  setup(props, cxt) {
    let title = ref('大屏')
    return {
      title
    }
  }
}
</script>