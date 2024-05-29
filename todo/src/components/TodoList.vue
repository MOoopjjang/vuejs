<template>
    <section>
        <div class="inputBox shadow">
            <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:key.enter="addTodo">
            <span class="addContainer" v-on:click="addTodo">
                <i class="addBtn fas fa-plus" aria-hidden="true"> </i>
            </span>

            <MyModal v-if="showModal" @close="showModal = false">
                <h3 slot="header">경고</h3>
                <span slot="footer" @click="showModal = false">
                    할일을 입력하세요
                    <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
                </span>
            </MyModal>
        </div>
        <!-- <ul> -->
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem,index) in todoItems" v-bind:key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem.Title }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
        <!-- </ul> -->
    </section>
</template>

<script>
    import MyModal from './common/AlertModal.vue'


    export default{
        props: ['propsdata']
        ,data(){
            return{
                todoItems: [],
                newTodoItem: '',
                showModal: false
            }
        }
        ,methods:{
            removeTodo(item,index){
                console.dir(item)
                this.$emit('removeTodo' , item , index);
            },
            addTodo(){
                if(this.newTodoItem !== ''){
                    var v = this.newTodoItem && this.newTodoItem.trim();
                    // localStorage.setItem(v , v);
                    // this.$emit('addTodo' , v);

                    this.$axios.post('http://localhost:8877/todo/regist' , {
                        Title:v
                    })
                    .then((res)=>{
                        console.dir(res);
                        alert(res);
                        this.todoItems.push(res.data);
                    })
                    .catch((err)=>{
                        alert(err);
                    })
                    .finally(()=>{
                        console.log("end");
                    });

                    this.clearInput();



                }else{
                    this.showModal = !this.showModal;
                }
                
            }
            ,clearInput(){
                this.newTodoItem = '';
            }

            // removeAll(){
            //     for(var i;i < localStorage.length ; i++){
            //         localStorage.removeItem(localStorage.key(i));

            //     }
            //     this.todoItems.removeAll();
            // }
        }
        // created(){
        //     if( localStorage.length > 0){
        //         for(var i = 0 ; i < localStorage.length;i++){
        //             this.todoItems.push(localStorage.key(i))
        //         }
        //     }
        // }
        ,components: {
            MyModal: MyModal
        }
    }
</script>

<style scoped>

    ul{
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding:0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .list-enter-active, .list-leave-active{
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .checkBtn{
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .removeBtn{
        margin-left: auto;
        color: #de4343;
    }

    input:focus {
        outline: none;
    }
    .inputBox{
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input{
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer{
        float: right;
        background: linear-gradient(to right, #6478FB , #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn{
        color: white;
        vertical-align: middle;
    }
</style>
