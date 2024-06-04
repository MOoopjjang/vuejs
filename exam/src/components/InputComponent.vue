<template>
    <div>
        <input type="text" v-model.lazy.trim="userName" placeholder="이름을 입력하세요" name="username" id="username" /><br />
        <input type="text" v-model="age" placeholder="나이를 입력하세요" name="age" id="age" /><br />
        <button type="button" v-on:click="onSave">저장</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                userName:'',
                age:0
            }
        },
        methods: {
            onSave(){
                // this.userInfo.userName = this.userName
                // this.userInfo.age = this.age
                this.$store.commit('saveItems2',{
                    userName:this.userName,
                    age:this.age
                })
                this.userName = '';
                this.age = 0;
            }
        }
    }
</script>
<style scoped>
</style>