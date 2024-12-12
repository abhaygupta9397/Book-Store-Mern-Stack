import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers:{
        addToCart : (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload._id);
            if(!existingItem){
                state.cartItems.push(action.payload)
                alert("Item is added successfully")
            }
                else{
                    alert("Item already exists");
                }
            }
        }
    

})

//export the actions
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;