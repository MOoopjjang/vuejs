<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
    export default{
        data(){
            return {
                title:"Just Do it"
            }
        }
        ,created(){
            this.$eventBus.$on('chgTit',this.changeTitle)
        }
        ,methods:{
            changeTitle(nTitle){
                this.title = nTitle
            }
        }

    }
</script>

<style>
    h1{
        color: #2F3B52;
        font-weight: 900;
        margin: 2.5rem 0 1.5rem;
    }
</style>