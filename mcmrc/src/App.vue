<template>
  <div id="app">
    <div class="main-wrap">
       <div class="side-wrap">
          <menu-comp></menu-comp>
       </div>
       <div class="content-wrap">
        <div>
          <router-view name="top" v-bind:stageInfo="stageInfo"></router-view>
          <div class="body-wrap">
            <router-view></router-view>
          </div>
          <!-- <router-view class="body-wrap"></router-view> -->
          <footer-comp></footer-comp>
        </div>
       </div>
    </div>
      
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  import MenuComponent from './components/MenuComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'

  export default {
      data(){
        return {
          stageInfo: {}
        }
      },
      created(){
          // TODO : axios를 통한 api 연동 필요
          [
            {id:1,itemName:"ICE Americano",itemCd:"ITEM00001",price:1500,qty:100}
            ,{id:2,itemName:"ICE Late",itemCd:"ITEM00002",price:4500,qty:14}
            ,{id:3,itemName:"BananaJuice",itemCd:"ITEM00003",price:5000,qty:34}
            ,{id:4,itemName:"Hot Mile",itemCd:"ITEM00004",price:2000,qty:1000}
          ].forEach(v=>{
            // this.$store.commit("registerProductItem" ,v)
            this.addProductItem(v);

            this.stageInfo.currentProfile = process.env.VUE_APP_PROFILE;
            this.stageInfo.version = process.env.VUE_APP_VERSION;
          })
          
      },
      components: {
        'menu-comp':MenuComponent,
        'footer-comp':FooterComponent
      },
      methods:{
        ...mapActions([
          'addProductItem'
        ])
      }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-wrap{
  /* flex-grow:1; */
  width:18%;
}

.content-wrap{
  display: flex;
  align-items: center;
  justify-content: center;

  width:82%;

  /* flex-grow:2;  */
}

.content-wrap div {
  width: 100%;
  height: 100%;

  margin: 0 auto;
}

.body-wrap {
  /* height: 400px; */
  overflow: auto;
} 

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
