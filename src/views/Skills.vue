<template>
    <div class = "skillbox_container">
        
        <h1> SKILL LIST</h1>

        <Skillbox des = 
        "I know how to use PHP native. I don't know everything but I can make a server with php, and I use the oop way to organize the code" 
        :img = 'image[0]'
        />
        <br>
        <Skillbox des =
         "I'm still not good at laravel but from all off the framework in the industry laravel is where I'm used to using. I have the level of knowledge where I can 
         create a working server, and I can also do front end in laravel using blade." 
         :img = 'image[1]'
         />
        <br>
        <Skillbox des = 
        "Another framework that I use specifically for front end is vue.js. It is a framework where you can create reactive UIs. like the others, I am still also not good at it. I only have
        a weeks of experience on it, and I use vite when developing front end." 
        :img = 'image[2]'
        />
        <br>
        <Skillbox des = 
        "I love video games that is why I learned Godot. I have used this game engine for 1 year and i'm kinda confident compared to the other development tools. So if you wan't me to make a game 
        I am willing to do it."
        :img = 'image[3]'
         />





    </div>
   
</template>


<script>
import Skillbox from '../components/Skillbox.vue'
import php from '@/assets/php.png'
import laravel from '@/assets/laravel.png'
import vuejs from '@/assets/vuejs.png'
import godot from '@/assets/godot.png'

export default {

   components: {Skillbox},
   data(){
    return{
        image: [php, laravel, vuejs, godot ]

    }
   },
        


}
</script>




<style scope>
.skillbox_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width:100%;
    height: 100%;
    /* border: solid green; */
}






</style>