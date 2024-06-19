<template>
   <div class="icon-bar">
        <router-link to="/"><i class="fa fa-home">home</i></router-link>
        <router-link to="/signin"><i class="fas fa-question">로그인</i></router-link>
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
    height: 100%;
    flex-grow:1;
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