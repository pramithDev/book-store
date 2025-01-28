import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartitems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // const item = action.payload;
            const existingItem = state.cartitems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.cartitems.push(action.payload);
                alert('Item added to cart');
            } else {
                alert('Item already in cart');
            }
        },
        // removeFromCart: (state, action) => {
        //     state.cartitems = state.cartitems.filter(x => x.product !== action.payload);
        // }
    }
});

// Export the action
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;