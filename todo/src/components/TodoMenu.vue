<template>
    <section>
        <div class="left">
            <ul>
               <li v-for="(item , index) in topMenuList" v-bind:key="index">
                    <router-link v-bind:to="`${item.path}`">{{ item.name }}</router-link>
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
                    {"name":"Home","path":"/"},
                    {"name":"Schedule","path":"/schedule"},
                    {"name":"Complete","path":"/complete"}
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
  .left ul li { font-size:25px;  height:75px; list-style-type: none;} 
  .left ul li#logo {font-family: 'Passion One', cursive; font-size:50px; height:170px;}
  .left ul li#logo div {line-height: 0.8}
  .left ul li#company {font-size:16px; margin-top:150px; }
  #left_btn {position:fixed; top:495px; left:-60px; cursor:pointer}


</style>
