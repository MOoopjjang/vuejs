import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    strict:true,
    state:{
        productItems:[],
        selectItemIndex:{}
    },
    getters:{
        productItems: state =>{
            return state.productItems
        },
        selectItem: state  =>{
            let findItem = {}
            for(let i = 0 ; i <  state.productItems.length ; i++){
                if(state.productItems[i].id === state.selectItemIndex){
                    findItem = state.productItems[i];
                    break
                }
            }
            console.dir(findItem)
            return findItem
        }
    },
    mutations:{
        registerProductItem(state , item){
            console.dir(item)
            state.productItems.push(item)
        },
        selectItem(state , idx){
            state.selectItemIndex = idx
            console.log("store > mutations > selectItemIndex = "+state.selectItemIndex)
        }
    },
    actions:{

    }
})