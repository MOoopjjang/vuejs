<template>
    <div class="signin-wrap">
        <b-form >

        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
            <b-form-input
            id="username"
            v-model="username"
            placeholder="Enter name"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your password" label-for="input-2">
            <b-form-input
            id="password"
            v-model="password"
            placeholder="Enter password"
            required
            ></b-form-input>
        </b-form-group>
<!-- 
        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
            >
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group> -->

        <b-button type="button" class="outline-primary" variant="outline-primary" v-on:click="signin">로그인</b-button>
        </b-form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

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
               alert('로그인되었습니다.');
               // static access token 발급
               this.setAccessToken('Bearer aaaabbbvkak84kdj'); 
                this.$router.push({name:'content'})
            },
            ...mapActions(['setAccessToken'])
        }

    }
</script>
<style scoped>
.signin-wrap{
    width: 100%;
    height: 600px;
}
</style>
