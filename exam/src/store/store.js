import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    strict: true,
    state: {
        items: [
            {
                country:"France",city:"Paris",attraction:"에펠탑",entrance_fee:10
            },
            {
                country:"Italy",city:"Venezia",attraction:"산마르코 대성당",entrance_fee:0
            },
            {
                country:"Austria",city:"Salzburg",attraction:"호엔잘쯔부르크성",entrance_fee:15.20
            },
            {
                country:"Germany",city:"Frankfurt",attraction:"뢰머광장",entrance_fee:0
            },
            {
                country:"Nederland",city:"Amsterdam",attraction:"국민미술관",entrance_fee:17.50
            }
        ],
        selectedCountry:' ',
        items2:[]
    },
    // 상태 ( state )에서 데이터를 가져오는 함수
    getters:{
        items: state =>{
            return state.items
        },
        items2: state =>{
            return state.items2
        },
        filteredItems: state => {
            return state.items.filter(item=>{
                return item.country == state.selectedCountry
            })
        }
    },
    mutations: {
        goCountry(state , inValue){
            state.selectedCountry = inValue;
        },
        saveItems2(state , _data){
            state.items2.push(_data)
        }
    },
    // 비동기적인 처리가 필요한 작업처리
    // --> 내부적으로 mutation을 사용
    actions: {
        goCountry(context , inValue){
            context.commit('goCountry' , inValue)
        }
    }
})
