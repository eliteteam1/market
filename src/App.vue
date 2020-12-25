<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/navigation/Footer"
export default {
  components:{
    Footer
  }
}
</script>
