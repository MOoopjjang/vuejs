<template>
    <div>
        <li class="order-item">
            <strong>{{ orderItem.title }}</strong>
            <span>count : {{ orderItem.count }}</span>
            <span>가격 : {{ orderItem.totalPrice }}</span>
        </li>
    </div>
</template>
<script>
    export default {
        props:{
            orderItem:{
                type:Object
            }
        }
    }
</script>
<style scoped>
    .order-item {
        list-style-type: none;
    }

    .order-item span {
        margin-left: 10px;
    }
</style>