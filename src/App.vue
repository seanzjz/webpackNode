<template>
  <!-- <div>“喂你好，是尼克陈吗？我是叮咚买菜的送菜员，由于您电话打不通，特意在页面里跟您说一声，您菜到家了。</div> -->
  <router-view/>
</template>
<script>
export default {
  setup() {
    const testFunction = () => {
      console.log('滚!!!')
    }
    const oneValue = ''
    return {
      testFunction,
      oneValue
    }
  },
  mounted() {
     let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
     let htmlDom = document.getElementsByTagName("html")[0];
     // 如果网页宽度大于750则让网页宽度等与750
     if( htmlWidth > 750 ) {
       htmlWidth = 750
     }
     htmlDom.style.fontSize = htmlWidth / 7.5 + "px";
    //1rem=100，设计稿宽度(750)/7.5=100(尽量取整)
     console.log(htmlDom.style.fontSize)
    this.oneValue = this.$store.state.count
    console.log('ss', this.$store.state)
    console.log('oneValue', this.oneValue)
    // this.$http.get('/url', {}).then((res) => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log('eeerr', err)
    // })
  },
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  div {
    color: yellowgreen;
  }
</style>
