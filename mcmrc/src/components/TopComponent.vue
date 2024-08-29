<template>
    <div>
        <h2>[{{profile}}]Top Area</h2>
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

export default {
    data(){
        return {
            profile:''
        }
    },
    methods:{
        logout(){
            // 로그아웃...
            alert('로그아웃 되었습니다.');
            this.clearAccessToken();
            // cookie에서 token 삭제.
            this.$cookies.remove('accessToken');
        },
        ...mapActions(['clearAccessToken'])
    },
    created(){
        this.profile = process.env.CURRENT_PROFILE;
        // alert(this.profile);
    },
    computed:{
        ...mapState(['accessToken'])
    }

}
</script>
<style scoped>
</style>