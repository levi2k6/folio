<script>


export default {
    props: ['des', 'img'],
  
    

}

</script>



<template>
    
<div class = "skillbox">

   
        <img class = "skillbox_image" :src = 'img'  >
       
        <p class = "skillbox_description"> {{ des }}</p>
        
       

</div>


</template>


<style scoped>
.skillbox{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 900px;
    height: 300px;
    /* border: solid blue; */
    background: rgb(14, 9, 46);
}


.skillbox_image{
    /* border: solid black; */
    width: 250px;
    height: 250px;
}

.skillbox_description{
    /* border: solid black; */
    width: 50%;
    height: 250px;
    padding:10px;
    font-size: 25px;
}

</style>


