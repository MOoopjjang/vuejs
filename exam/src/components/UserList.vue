<template>
    <div>
        <h1>user 목록</h1>
        <ul>
            <li v-for="item in items2" v-bind:key="item">
                이름 : {{ item.userName }} <br />
                나이 : {{ item.age }} <br />
                <p>------------------------------------</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        computed:{
            items2(){
                return this.$store.getters.items2
            }
        }
    }
</script>
<style scoped>
ul {
    list-style-type: none;
}
</style>