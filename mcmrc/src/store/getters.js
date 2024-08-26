


export function getSelectItem( state ){
    for(let i = 0 ; i < state.productItems.length ; i++){
        let productItem = state.productItems[i];
        if(productItem.id === state.selectItemIndex){
            return productItem;
        }
    }
    return null;
}


export function getCartItems( state ){
    return state.cartItems;
}

export function getOrderItems( state ){
    return state.orderItems;
}


export default {
    getSelectItem,
    getCartItems,
    getOrderItems
}