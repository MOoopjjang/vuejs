<template>
    <div class="content-main">
        <div>
            <ul class="content-list">
                <product-item-component v-for="productItem in productItems" v-bind:key="productItem.itemCd" 
                    v-on:detail="goItemDetail(productItem)"
                    v-bind:productItem="productItem" 
                />
            </ul>
        </div>

    </div>
</template>
<script>
    import ProductItemComponent from './ProductItemComponent.vue'
    import { mapActions , mapState } from 'vuex';
    import EventBus from '@/assets/js/event-bus.js';

    export default {
        created(){
            EventBus.$emit('currentTab' , '상품목록');
        },
        methods:{
            goItemDetail(item){
                this.setSelectItem(item.id);
                this.$router.push({name:'itemDetail'});
                
            },
            ...mapActions([
                'getProductItem',
                'setSelectItem'
            ])
        },
        computed:{
            // 값을 mapState를 통해 컴포넌트에 매핑한다.
            ...mapState([
                'productItems'
            ])
        },
        components:{
            'product-item-component':ProductItemComponent
        }
    }
</script>
<style scoped>
.content-main{
    width: 100%;
    height: 400px;
}

.content-list {
    width: 100%;
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
