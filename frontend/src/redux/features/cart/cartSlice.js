import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
    cartitems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // const item = action.payload;
            const existingItem = state.cartitems.find(
                (item) => item._id === action.payload._id
            );
            if (!existingItem) {
                state.cartitems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "product added to cart",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    title: "Already Added to the Cart",
                    icon: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK",
                });
            }
        },
        removeFromCart: (state, action) => {
            state.cartitems = state.cartitems.filter(item => item._id !== action.payload._id);
        },
        clearCart: (state) => {
            state.cartitems = [];
        },
    },
});

// Export the action
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
