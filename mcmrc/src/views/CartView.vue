<template>
    <div class="cart-view">
        <div v-if="isShow">
            <ul>
                <product-item-component v-for="productItem in cartItems" v-bind:key="productItem.itemCd"
                    v-bind:productItem="productItem"
                />
            </ul>
            <div>
                <strong>총 가격 : {{ getTotalPrice }}</strong>
            </div>
            <div>
                <button type="button" v-on:click="onOrder()">주문하기</button>
                <button type="button" v-on:click="onCancel()">취소하기</button>
            </div>
        </div>
        <div v-else>
            <strong>장바구니에 등록한 상품이 없습니다.</strong>
        </div>
    </div>
</template>
<script>
    import ProductItemComponent from '../components/ProductItemComponent.vue'
    import { mapGetters , mapActions } from 'vuex';

    export default{
        data(){
            return {
                cartItems:[],
                isShow:false
            }
        },
        created(){
            this.cartItems = this.getCartItems;
            this.isShow = this.cartItems.length > 0;
        },
        computed:{
            getTotalPrice(){
                let totalCartprice = 0;
                this.cartItems.forEach(v=>{
                    totalCartprice += v.price;
                })
                return totalCartprice;
            },
            ...mapGetters(['getCartItems'])
        },
        methods:{
            onCancel(){
                alert('장바구니를 취소합니다.');
                this.cartItems = [];
                this.delAllCartItem();

                this.isShow = false;
            },
            onOrder(){
                
                let title = this.cartItems[0].itemName;
                if(this.cartItems[0].length > 1){
                    title += ' 외'+ (this.cartItems[0].length-1);
                }
                let count = this.cartItems.length;
                let totalPrice = 0;
                this.cartItems.forEach(v=>{
                    totalPrice += v.price;
                });

                /** 주문목록에 저장 */
                this.addOrderItem({
                    'title':title,
                    'count':count,
                    'totalPrice':totalPrice
                });

                /** 장바구니 초기화. */
                this.delAllCartItem();
                this.isShow = false;

                alert('주문을 완료했습니다.');

                /** 주목목록으로 이동 */
                this.$router.push({name:'order'});

            },
            ...mapActions(['delAllCartItem' , 'addOrderItem'])
        },
        components:{
            'product-item-component':ProductItemComponent
        }
    }
</script>
<style scoped>
  .cart-view{

  }
</style>