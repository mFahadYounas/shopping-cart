import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

////////////////////////////
/*
    Use map instead of array for cart states (would probably be better)
*/
///////////////////////////

type cartItem = {
    itemId: number,
    itemName: string,
    price: string,
    quantity: number,
    imgUrl: string
}


type cartState = {
    items: cartItem[]
}

const initState: cartState = {
    items: [],
};

const cartSlice = createSlice({

    name: 'cart',
    initialState: initState,
    reducers: {

        addItem: (state, action: PayloadAction<cartItem>) => {
            if(state.items.some(item => item.itemId === action.payload.itemId)) {
                alert('Item already added in cart!');
                return;
            }
            state.items = [... state.items, action.payload];
        },

        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item: cartItem) => item.itemId !== action.payload);
        },

        incQuantity: (state, action: PayloadAction<number>) => {
            state.items.forEach((item: cartItem) => {
                if(item.itemId === action.payload) {
                    item.quantity += 1;
                }
            })
        },

        decQuantity: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item: cartItem) => {
                if(item.itemId === action.payload) {
                    item.quantity -= 1;
                }
                return item.quantity !== 0;
            })
        }

    }

})

export const { addItem, removeItem, incQuantity, decQuantity } =  cartSlice.actions;

export const selectCart = (state: RootState): cartItem[] => state.cart.items;

export default cartSlice.reducer;
