<template>
  <div id="app">
    <router-view/>
    <Footer v-show="this.$store.state.isShowFooter"></Footer>
  </div>
</template>
<script>
import Footer from "@/components/navigation/Footer"
export default {
  data() {
    return {
    }
  },
  components:{
    Footer
  },
  created(){
  }
}
</script>
