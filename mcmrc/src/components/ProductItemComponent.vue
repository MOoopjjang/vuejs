<template>
    <!-- <div> -->
        <li class="product-item" v-on:click="goDetail">
            <strong>{{ productItem.itemName }}</strong> <br />
            <span>ID : {{ productItem.id }}</span> <br />
            <img v-lazy="productItem.img" /> <br />
            <span>CD : {{ productItem.itemCd }}</span>
            <span>가격 : {{ productItem.price }}</span>
        </li>
    <!-- </div> -->
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
        border-bottom: 2px groove; 
        /* box-shadow: inset; */
        padding-left: 10px;
    }

    .product-item img {
        width: 100%;
        height: 100%;
    }
</style>