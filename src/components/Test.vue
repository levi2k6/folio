<script>
import {ref, onMounted, watch} from 'vue'

export default {
    name: 'Test',
    props: [],
    data(){
        return{
            title: "My First View App"
        }

    },
    methods: {
        handleClick(){
            console.log(this.$refs.name.value)
            this.title = this.$refs.name.value
        }
    }

}
</script>

<template>
<div>
    <slot></slot>
    <input type = "text" ref = "name">
    <button @click="handleClick">click me</button>
</div>
</template>