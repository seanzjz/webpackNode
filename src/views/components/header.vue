<template>
  <div>
      <header>{{title}}</header>
  </div>
</template>
<script>
import {ref, reactive} from 'vue'
export default {
  name: 'header',
  setup(props, cxt) {
    let title = ref('头部')
    return {
      title
    }
  }
}
</script>