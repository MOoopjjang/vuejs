<template>
    <section>
        <!-- <ul id="menuTab">
            <li v-for="(item,index) in topMenuList" v-bind:key="index">
                <button type="button" v-on:click="onChangeTab(item)">{{ item.title }}</button>
            </li>
        </ul> -->

        <div class="left">
            <ul>
                <li id="logo">
                    <div>Inventory</div>
                    <div>Manager</div>
                </li>
                <li>Home</li>
                <li>Manager</li>
                <li>State</li>
                <li>Register</li>
                <li id="company">
                    <div>Welcome to Inventory</div>
                    <div>Seoul Gangnam <br> ... </div>
                    <div>@copyright demnodey</div>
                </li>
            </ul>
        </div>
    </section>

</template>

<script>
    export default{
        // name: 'left',
        data(){
            return {
                topMenuList:[
                    {"title":"일정","path":"/todo/a"},
                    {"title":"완료목록","path":"/todo/b"},
                    {"title":"오늘할일","path":"/todo/c"}
                ]
            }
        }
        ,methods:{
            onChangeTab(item){
                this.$eventBus.$emit("chgTit" , item.title)
            },
            
        }
    }
</script>
    
<style scoped>
    /* section {
        position: relative;
        width: 100%;
        height: 100%;
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    li {
        flex-grow: 1;
    } */

    a{color:black}
  a:hover{color:rgb(255,98,124);}
  .left{
    position:fixed; 
    top:0px; 
    left:0px; 
    width:250px; 
    height:1000px; 
    background:rgba(255,98,124,0.6); 
    padding:40px 0; 
    overflow: hidden
  }
  .left ul {padding: 0 30px}
  .left ul li { font-size:25px;  height:75px;} 
  .left ul li#logo {font-family: 'Passion One', cursive; font-size:50px; height:170px;}
  .left ul li#logo div {line-height: 0.8}
  .left ul li#company {font-size:16px; margin-top:150px; }
  #left_btn {position:fixed; top:495px; left:-60px; cursor:pointer}


</style>
