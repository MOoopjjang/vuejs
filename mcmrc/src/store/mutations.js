
import { ADD_PRODUCT_ITEM , FETCH_PRODUCT_ITEM , SET_SELECT_ITEM } from './mutation-type'
import { ADD_CART_ITEM , DEL_CART_ITEM , ADEL_CART_ITEM } from './mutation-type';
import { ADD_ORDER_ITEM } from './mutation-type';
import { SET_ACCESS_TOKEN , REMOVE_ACCESS_TOKEN } from './mutation-type';


export default {
    [ADD_PRODUCT_ITEM] (state , payload){
        state.productItems.push(payload);
    },
    [FETCH_PRODUCT_ITEM] (state){
        state.productItems;
    },
 
    [SET_SELECT_ITEM] (state , payload){
        state.selectItemIndex = payload;
    },
    [ADD_CART_ITEM] (state , payload){
        state.cartItems.push(payload);
    },
    [ADEL_CART_ITEM] (state){
        state.cartItems = [];
    },
    [DEL_CART_ITEM] (state , id){
        for(let i = 0 ; i < state.cartItems.length ; i++){
            let cartItem = state.cartItems[i];
            if( cartItem.id === id){
                state.cartItems.splice(i , 1);
                break;
            }
        }
    },
    [ADD_ORDER_ITEM] (state , payload){
        state.orderItems.push(payload);
    },
    [ SET_ACCESS_TOKEN ] (state , token){
        state.accessToken = token;
    },
    [ REMOVE_ACCESS_TOKEN ] (state){
        state.accessToken = null;
    }

}