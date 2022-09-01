import { restocked as cakeRestocked  } from '../cake/cakeSlice'
import {createSlice }from '@reduxjs/toolkit'


const initialState = {
    numberOfIceCream : 90 
}
// the create slice class accept an object as an argument 
// with properties as follow
const iceCreamSlice = createSlice({
    name : 'icecream',
    initialState : initialState,
    reducers : {
        ordered : (state)=>{
            state.numberOfIceCream--
        },
        restocked : (state, action )=>{
            state.numberOfIceCream += action.payload
        }
    },
    // extraReducers : {
    //     ['cake/ordered'] : (state) => {
    //         state.numberOfIceCream--
    // }}

    // recommended way of adding extra reducer
    extraReducers : (builder) => {
        builder.addCase(cakeRestocked, (state, action) => {
            state.numberOfIceCream += action.payload
        })
    }
})

export default iceCreamSlice.reducer
export const { ordered , restocked } = iceCreamSlice.actions