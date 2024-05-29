
<!--

    vuetify & material UI sample


-->
<template>
    <v-layout justify-center>
        <v-card class="rounded-card mb-3">
            <v-card class="rounded-card mb-3">
                <v-card-title class="justify-center">
                    <div><h3 class="headline mb-2">Vue.js 뉴스 가입하기</h3></div>
                </v-card-title>
                <v-form v-model="valid" ref="form">
                    <v-text-field id="email" name="email" class="pa-2" label="이메일" v-model="user.email" :rules="emailRules" required></v-text-field>
                    <v-text-field id="password" name="password" type="password" class="pa-2" label="비밀번호" v-model="user.password" :rules="passwordRules" required></v-text-field>
                    <v-checkbox class="pl-2" label="진행할까요?" v-model="checkbox" :rules="checkboxRules" required></v-checkbox>
                    <v-btn v-on:click="submit" :class="{ red: !valid,green: valid}">전송</v-btn>
                    <v-btn v-on:click="clear">취소</v-btn>
                </v-form>
            </v-card>
        </v-card>
    </v-layout>
</template>
<script>
    export default {
        data(){
            return {
                valid:false,
                user:{
                    email:'',
                    password:''
                },
                emailRules:[
                    v => !!v || '이메일을 입력하세요',
                    v => /.+@.+/.test(v) || '유효한 이메일을 입력하세요'
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
            submit(){
                /** 모든 input의 유효성을 검증하고 타장하면 true를 반환 */
                if(this.$refs.form.validate() == true){
                    alert('전송 데이터\n\n' + JSON.stringify(this.user))
                }
            },
            clear(){
                /** 모든 input에 대해 검증 오류를 제거하고 리셋 */
                this.$refs.form.reset()
            }

        }
    }
</script>
<style scoped>
    .rounded-card{ border-radius: 10px;}
</style>