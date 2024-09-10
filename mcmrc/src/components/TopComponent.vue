<template>
    <div class="top-main">
        <div class="top-main-1">
            <h2>MCMRC {{ stageInfo.currentProfile }}_{{ stageInfo.version }} > </h2><span>{{ currentTab }}</span>
        </div>
        <div v-if="accessToken">
            <button v-on:click="logout">로그아웃</button>
        </div>
        <div v-else>
            <router-link v-bind:to="{name:'signin'}">로그인</router-link>
        </div>
    </div>
</template>
<script>

import { mapState , mapActions } from 'vuex';
// import EventBus from '@/assets/js/event-bus.js';

export default {
    name:'TopComponent',
    props:{
        stageInfo:{
            type:Object
        }
    },
    data(){
        return {
            currentTab:''
        }
    },
    created(){
        this.$eventBus.$on('currentTab' , (tab)=>{
            this.currentTab = tab;
        });
    },
    methods:{
        logout(){
            // 로그아웃...
            alert('로그아웃 되었습니다.');
            this.clearAccessToken();
            // cookie에서 token 삭제.
            this.$cookies.remove('accessToken');
        },
        curTab(){

        },
        ...mapActions(['clearAccessToken'])
    },
    computed:{
        ...mapState(['accessToken'])
    }

}
</script>
<style scoped>
.top-main{
    padding: 10px;
    background-color: cadetblue;
}
.top-main-1 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.top-main-1 > span {
    margin-left:10px;
}
</style>