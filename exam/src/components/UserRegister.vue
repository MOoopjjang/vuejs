<template>
    <div>
        <div>
            <input type="text"  placeholder="이름" v-model="userData.email" />
            <input type="password" placeholder="암호" v-model="userData.pwd" />
            <button v-on:click="btnOk">확인</button>
        </div>
        <div v-show="dataShow">
            입력된 이메일 : {{ userData.email }} <br />
            입력된 비밀번호 : {{ userData.pwd }} <br />
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return {
                userData :{
                    email:"cwkim@aaaa.com",
                    pwd:"1111"
                },
                dataShow:false
            }
        },
        methods :{
            btnOk(){
                this.dataShow = true;
            }
        }
    }
</script>
<style scoped>
</style>