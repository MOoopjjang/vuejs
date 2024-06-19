<template>
    <div>
        <h1>Item Detail</h1>
        <form>
            
            상품이름 :<input type="text" name="itemName" id="itemName" v-bind:value="sItem.itemName" disabled/> <br />
            상품가격 :<input type="text" name="itemName" id="itemName" v-bind:value="sItem.price" disabled/> <br />
            수량 :<input type="text" name="itemName" id="itemName" v-bind:value="sItem.qty" disabled/> <br />
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                sItem:{}
            }
        },
        created(){
            this.sItem = this.$store.getters.selectItem
        }
    }
</script>
<style scoped>
</style>