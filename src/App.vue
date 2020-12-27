<template>
  <div id="app">
    <router-view/>
    <Footer v-show="isShowFooter"></Footer>
  </div>
</template>
<script>
import Footer from "@/components/navigation/Footer"
export default {
  data() {
    return {
      isShowFooter:true
    }
  },
  components:{
    Footer
  },
  created(){
    this.$eventBus.$on('hide_footer' , val=>{
      this.isShowFooter = val
    })
  }
}
</script>
