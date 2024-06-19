<template>
    <div>
        <div>
            <ul>
                <li v-for="item in items" v-bind:key="item.itemCd" v-on:click="goItemDetail(item)">
                  <div>{{ item.id }}</div>
                  <div>{{ item.itemName }}</div>
                  <div>{{ item.price }}</div>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    export default {
        methods:{
            goItemDetail(item){
                console.log(">>>> goItemDetail()-> "+item.id)
                this.$store.commit('selectItem' , item.id)
                this.$router.push({name:'itemDetail'})
            }
        },
        computed:{
            items(){
                return this.$store.getters.productItems
            }
        }
    }
</script>
<style scoped>
li{
    display: flex;
    align-items: center;
    justify-content: center;

    list-style-type: none;
}

li div:nth-child(1){
    flex-grow: 1;
}
li div:nth-child(2){
    flex-grow: 1;
}
li div:nth-child(3){
    flex-grow: 1;
}

</style>