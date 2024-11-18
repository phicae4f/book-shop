import { createSlice } from "@reduxjs/toolkit";
import  Swal  from "sweetalert2";


const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if(!existingItem) {
        state.cartItems.push(action.payload)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Товар добавлен в корзину",
            showConfirmButton: false,
            timer: 1500
          });
      } else {
        Swal.fire("Товар уже находится в корзине!");
      }
    },
  },
});

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
