<template>
  <div id="app">
    <div class="mainWrap">
      <div>
        <TodoMenu></TodoMenu>
      </div>
      <div>
        <TodoHeader></TodoHeader>
        <TodoInput v-on:addTodo="addTodo"></TodoInput>
        <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
        <TodoFooter v-on:removeAllTodo="removeAllTodo"></TodoFooter>
      </div>
    </div>
   
    
   
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoMenu from './components/TodoMenu.vue'
// import AlertModal from '.components/common/AlertModal.vue'

export default {
  data(){
    return {
      todoItems:[]
    }
  },
  methods:{
    addTodo(todoItem){
      console.log(todoItem);
      localStorage.setItem(todoItem,todoItem);
      this.todoItems.push(todoItem);
    }
    ,removeAllTodo(){
      console.log('removeAllTodo');
      localStorage.clear();
      this.todoItems = [];
    }
    ,removeTodo(todoItem , index){
      console.log(">>>vue -> removeTodo")
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index , 1);
    }
  },
  components: {
    'TodoHeader':TodoHeader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
    'TodoFooter':TodoFooter,
    'TodoMenu':TodoMenu
  }
  ,created(){
    console.log('localStorage length : ',localStorage.length)
    if(localStorage.length > 0){
        for(var i = 0;i < localStorage.length ; i++){
          console.log('localStorage key : ',localStorage.key(i));
          this.todoItems.push(localStorage.key(i));
        }
    }
  }
}
</script>

<style>
    body{
        text-align: center;
        background-color: #F6F6F8;
    }

    input{
      border-style: groove;
      width: 200px;
    }
    button{
      border-style: groove;
    }
    .shadow{
      box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
    }

    .mainWrap{
      display: flex;
      flex-direction: row;
    }
</style>
