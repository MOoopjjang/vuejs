<template>
    <section>
        <div style="border: 2px solid blue;width:400px;margin: 0 auto;">
            <slot name="title"></slot>
        </div>
        <div>
            <input type="text" placeholder="이름" v-model="inputName"/> <br />
            <textarea cols="16" rows="5" v-model="inputComment"></textarea><br />
            <button v-on:click="btnOk">등록</button>
        </div>
        <div v-show="commentShow">
            <ul>
                <li v-for="(item,index) in mcommentDatas" v-bind:key="item"> 
                    <div>
                        <p>-----------------------------------------</p>
                        <p>{{ index }}</p>
                        <p>{{ item.name  }}</p>
                        <p>{{ item.comment }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    
</template>
<script>
    export default{
        data(){
            return {
                mcommentDatas:[],
                inputName:"",
                inputComment:"",
                commentShow:false
            }
        },
        methods: {
            btnOk(){
                this.mcommentDatas.push({name:this.inputName,comment:this.inputComment})
                this.commentShow = true;
                this.inputName = "";
                this.inputComment = "";
            }
        }
    }
</script>
<style scoped>
    ul {
        list-style-type: none;
    }
</style>