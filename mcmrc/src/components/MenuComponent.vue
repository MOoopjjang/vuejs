<template>
   <div class="icon-bar">
        <router-link to="/"><i class="fa fa-home">home</i></router-link>
        <router-link to="/signin"><i class="fas fa-question">로그인</i></router-link>
        <router-link to="/product"><i class="fas fa-question">상품</i></router-link>
        <router-link to="/view/cart"><i class="fas fa-question">장바구니</i></router-link>
        <router-link to="/view/order"><i class="fas fa-question">주문목록</i></router-link>
        <router-link to="/info"><i class="fas fa-question">앱정보</i></router-link>
   </div>
</template>
<script>
    export default {
        methods:{
            toggleSidebar(){
                const menu = document.querySelector(".menu");
                menu.classList.toggle("active");
            }
        }
    }
</script>
<style scoped>
.icon-bar{
    width: 18%;
    height: 100%;
    /* flex-grow:1; */
    background-color: #555;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 0;
}

.icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 12px;
}

.icon-bar a:hover{
    background-color: #858585;
}

.active {
    background-color: #5eaf13;
}

</style>