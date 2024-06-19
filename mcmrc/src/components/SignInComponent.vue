<template>
    <div class="signin-wrap">
        <v-layout justify-center>
	        <v-card class="rounded-card mb-3">
	            <v-card class="rounded-card mb-3">
	                <v-card-title class="justify-center">
	                    <div><h3 class="headline mb-2">로그인</h3></div>
	                </v-card-title>
	                <v-form v-model="valid" ref="form">
	                    <v-text-field id="username" name="username" class="pa-2" label="아이디" v-model="username" :rules="usernameRules" required></v-text-field>
	                    <v-text-field id="password" name="password" type="password" class="pa-2" label="비밀번호" v-model="password" :rules="passwordRules" required></v-text-field>
	                    <v-checkbox class="pl-2" label="진행할까요?" v-model="checkbox" :rules="checkboxRules" required></v-checkbox>
	                    <v-btn v-on:click="signin" :class="{ red: !valid,green: valid}">전송</v-btn>
	                    <v-btn v-on:click="clear">취소</v-btn>
	                </v-form>
	            </v-card>
	        </v-card>
	    </v-layout>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                valid:false,
                username:'',
                password:'',
                usernameRules:[
                    v => !!v || '아이디를 입력하세요',
                ],
                passwordRules:[
                    v => !!v || '비밀번호를 입력하세요',
                    v => v && v.length >=6 || '비밀번호는 적어도 6 자리 이상 입력하세요'
                ],
                checkboxRules:[ v => !!v || '등록하러면 동의해야 합니다.'],
                checkbox:false
            }
        },
        methods:{
            signin(){
               if(this.$refs.form.validate() == true){
                alert('전송 데이터\n\n'+this.username);
                this.$router.push({name:'content'})
               }
            },
            clear(){
                this.$refs.form.reset();
            }
        }

    }
</script>
<style scoped>
.signin-wrap{
    width: 100%;
    height: 600px;
}
</style>