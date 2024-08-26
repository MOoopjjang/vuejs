<template>
    <div>
        <li class="product-item" v-on:click="goDetail">
            <strong>{{ productItem.itemName }}</strong>
            <span>ID : {{ productItem.id }}</span>
            <span>CD : {{ productItem.itemCd }}</span>
            <span>가격 : {{ productItem.price }}</span>
        </li>
    </div>
</template>
<script>
    export default {
        props:{
            productItem:{
                type:Object
            }
        },
        methods:{
            goDetail(){
                this.$emit('detail' , this.productItem);
            }
        }
    }
</script>
<style scoped>
    .product-item{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        list-style-type: none;
        border: 2px groove;
        padding-left: 10px;
    }
</style>