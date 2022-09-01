import {createSlice }from '@reduxjs/toolkit'


const initialState = {
    numberOfCakes : 80 
}
// the create slice class accept an object as an argument 
// with properties as follow
const cakeSlice = createSlice({
    name : 'cake',
    initialState : initialState,
    reducers : {
        ordered : (state)=>{
            state.numberOfCakes--
        },
        restocked : (state, action )=>{
            state.numberOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer
export const { ordered , restocked } = cakeSlice.actions