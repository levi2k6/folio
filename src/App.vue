<script >
import Header from './components/Header.vue'
import SKillbox from './components/Skillbox.vue'

export default {
  components: {Header, SKillbox},
  data(){
    return{
      header: "this is a header in data of app.vue"

    }
  }
}

</script>

<template>
  
  <Header/>

  <RouterView />

</template>


<style>
body{
background: rgb(32, 26, 66);


}

#app{
/* border: solid red; */
width: 100%;
height: 100%;
color:rgb(255, 146, 113);

}








</style>
