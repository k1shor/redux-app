const initialData={
    cart_items:[]

}

function newCartreducer(state = initialData,action){
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cart_items:[...state.cart_items, action.payload]
            }
            
    
        default:
            return state;
    }
}

export default newCartreducer