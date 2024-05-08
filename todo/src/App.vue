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
      this.$axios.post('http://localhost:8877/todo/regist' , {
        Title:todoItem
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

/*
      localStorage.setItem(todoItem,todoItem);
      this.todoItems.push(todoItem);
*/
    }
    ,removeAllTodo(){
      /*
      console.log('removeAllTodo');
      localStorage.clear();
      */

      this.$axios.delete('http://localhost:8877/todo/rm/all')
      .then((res)=>{
        console.dir(res)
        this.todoItems = [];
      })
      .cache((err)=>{
        alert(err)
      })
      .finally(()=>{
        console.log("end")
      })
      
    }
    ,removeTodo(todoItem , index){
      alert(todoItem.Idx)
      this.$axios.delete('http://localhost:8877/todo/rm',{
        data: {
          Idx:todoItem.Idx,
          Title:todoItem.Title
        }
        
      })
      .then((res)=>{
          alert(res);
          this.todoItems.splice(index , 1);
      })
      .catch((err)=>{
        alert(err)
      })
      .finally(()=>{
        console.log("end")
      })

      /*
       console.dir(">>>vue -> removeTodo")
       localStorage.removeItem(todoItem);
       this.todoItems.splice(index , 1);
      */
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
    /*
    console.log('localStorage length : ',localStorage.length)
    if(localStorage.length > 0){
        for(var i = 0;i < localStorage.length ; i++){
          console.log('localStorage key : ',localStorage.key(i));
          this.todoItems.push(localStorage.key(i));
        }
    }
    */

    this.$axios.get("http://localhost:8877/todo")
        .then((res)=>{
             console.dir(res);
            console.log("totalCount = "+res.data.TotalCount);
            if(res.data.TotalCount > 0){
              res.data.List.forEach(d=>{
                this.todoItems.push(d);
              })
            }

        })
        .catch((error)=>{
          alert(error);
        })
        .finally(()=>{
          console.log("end")
        })
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
      flex-direction: column;
    }
</style>
