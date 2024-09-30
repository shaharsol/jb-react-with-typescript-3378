import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../models/Product";

interface ProductsState {
    products: Product[]
}

const initialState: ProductsState = {
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },
        add: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        update: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex(p => p.id === action.payload.id)
            state.products[index] = action.payload
        },
        remove: (state, action: PayloadAction<{id: number}>) => {
            const index = state.products.findIndex(p => p.id === action.payload.id)
            state.products.splice(index, 1)
        }
    }
})

export const { init, add, update, remove } = productSlice.actions

export default productSlice.reducer

