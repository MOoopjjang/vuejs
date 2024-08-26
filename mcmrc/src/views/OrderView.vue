<template>
    <div>
        <ul v-if="isShow">
            <order-item-comp v-for="orderItem in orderItems" v-bind:key="orderItem"
                v-bind:orderItem="orderItem"
                v-on:detail="detail"
            />
        </ul>
        <div v-else>
            <h2>주문 내역이 없습니다.</h2>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import OrderItemComp from '../components/OrderItemComponent.vue';
    export default {
        data(){
            return{
                orderItems:[],
                isShow:false
            }
        },
        methods:{
            detail(id){
                alert('detail -> id = '+id);
            },
            ...mapGetters(['getOrderItems'])
        },
        created(){
            
            this.orderItems = this.getOrderItems();
            if(this.orderItems.length > 0){
                this.isShow = true;
            }
            
        },
        components:{
            'order-item-comp':OrderItemComp
        }
    }
</script>
<style scoped>
</style>