<template>
    <section>
        <ul id="menuTab">
            <li v-for="(item,index) in topMenuList" v-bind:key="index">
                <button type="button" v-on:click="onChangeTab(item)">{{ item.title }}</button>
            </li>
        </ul>
    </section>

</template>

<script>
    export default{
        data(){
            return {
                topMenuList:[
                    {"title":"일정","path":"/todo/a"},
                    {"title":"완료목록","path":"/todo/b"},
                    {"title":"오늘할일","path":"/todo/c"}
                ]
            }
        }
        ,methods:{
            onChangeTab(item){
                this.$eventBus.$emit("chgTit" , item.title)
            }
        }
    }
</script>
    
<style scoped>
    section {
        position: relative;
        width: 100%;
        height: 100%;
        /* background-color: red; */
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    li {
        flex-grow: 1;
    }

</style>