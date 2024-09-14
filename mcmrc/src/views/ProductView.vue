<template>
    <div class="product-main">
        <div>
            <ul class="product-list">
                <product-item-component v-for="productItem in productItems" v-bind:key="productItem.itemCd" 
                    v-on:detail="goItemDetail(productItem)"
                    v-bind:productItem="productItem" 
                />
            </ul>
        </div>

    </div>
</template>
<script>
 import ProductItemComponent from '../components/ProductItemComponent.vue'
 import { mapActions , mapState } from 'vuex';

    export default {
        created(){
            this.$eventBus.$emit('currentTab' , '상품목록');
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
.product-main{
    width: 100%;
    height: 400px;
}

.product-list {
    width: 100%;
    padding-left:0px;
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