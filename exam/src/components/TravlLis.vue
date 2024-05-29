<template>
    <div>
        <p><input v-model="inputFilter" /></p>
        <!-- <slot :childitems = "childitems"></slot> -->
        <slot :items="filteredList"></slot>
    </div>

</template>

<script>
    export default {
        props:["items"],
        data(){
            return {
                inputFilter:"",
                // childitems:['one' , 'two' , 'three']
            }
        },
        computed: {
            filteredList(){
                return this.items.filter(item => item.cityname.includes(this.inputFilter))
            }
        }
    }
</script>

<style scoped>
</style>