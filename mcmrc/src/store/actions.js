
import { ADD_PRODUCT_ITEM , FETCH_PRODUCT_ITEM , SET_SELECT_ITEM } from "./mutation-type";
import { ADD_CART_ITEM , DEL_CART_ITEM , ADEL_CART_ITEM } from "./mutation-type";
import { ADD_ORDER_ITEM } from "./mutation-type";

import { SET_ACCESS_TOKEN , REMOVE_ACCESS_TOKEN } from "./mutation-type";


export function addProductItem( { commit } , payload){
    commit(ADD_PRODUCT_ITEM ,payload);
}

export function getProductItem({commit}){
    commit(FETCH_PRODUCT_ITEM);
}

export function setSelectItem({commit} , payload){
    commit(SET_SELECT_ITEM , payload);
}

export function addCartItem({commit} , payload){
    commit(ADD_CART_ITEM , payload);
}

export function delAllCartItem({commit}) {
    commit(ADEL_CART_ITEM);
}

export function delCartItem({commit} , id){
    commit(DEL_CART_ITEM , id);
}

export function addOrderItem({commit} , payload){
    commit(ADD_ORDER_ITEM , payload);
}

export function setAccessToken({commit} , token){
    commit( SET_ACCESS_TOKEN , token );
}

export function clearAccessToken({commit}){
    commit( REMOVE_ACCESS_TOKEN );
}


export default {
    addProductItem,
    getProductItem,
    setSelectItem,
    addCartItem,
    delAllCartItem,
    delCartItem,
    addOrderItem,
    setAccessToken,
    clearAccessToken
}