<template>
    <div class="item-detail">
        <h1>Item Detail</h1>
        <form>
            상품이름 :<input type="text" name="itemName" id="itemName" v-bind:value="sItem.itemName" disabled/> <br />
            상품가격 :<input type="text" name="itemName" id="itemName" v-bind:value="sItem.price" disabled/> <br />
            수량 :<input type="text" name="itemName" id="itemName" v-bind:value="sItem.qty" disabled/> <br />
            <br />
            <b-button variant="outline-primary" v-on:click="saveCart">장바구니추가</b-button>
        </form>
    </div>
</template>
<script>
    import { mapGetters , mapActions } from 'vuex';

    export default {
        data(){
            return {
                sItem:{}
            }
        },
        computed:{
            ...mapGetters(['getSelectItem' , 'isAuthentication'])
        },
        created(){
            this.sItem = this.getSelectItem;
            console.dir(this.sItem);

            // Header 갱신
            this.$eventBus.$emit('currentTab' , '상품상세');
        },
        methods:{
            saveCart(){
                if(!this.isAuthentication){
                    alert('로그인이 필요합니다.');
                    this.$router.push({name:'signin'});
                }else{
                    alert(this.sItem.itemName+" 가 장바구니에 등록되었습니다.");
                    this.addCartItem(this.sItem);

                    // cart로 이동..
                    this.$router.push({name:'cart'})
                            .catch(()=>{});
                }
               
            },
            ...mapActions(['addCartItem'])
        },
        
        
    }
</script>
<style scoped>
.item-detail{
    width: 100%;
    height: 400px;
}
</style>