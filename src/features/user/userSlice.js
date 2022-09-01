import  {createSlice ,createAsyncThunk }from '@reduxjs/toolkit'
import  axios from 'axios'


const initialState = {
    loading : false , 
    users : [],
    errors : ''
}


// the createAsyncThunk accept two parameters these action name and a callback function 
// that create the payload
// Also this generate pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>  res.data )
}) 

const userSlice = createSlice({
    name : 'user',
    initialState : initialState ,
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.pending , state => {
            state.loading = true
            state.users = []
            state.errors = ''
        })
        builder.addCase(fetchUsers.fulfilled ,( state, action) => {
            state.loading = false
            state.users = action.payload
            state.errors = ''
        })
        builder.addCase(fetchUsers.rejected , (state, action) => {
            state.loading = false
            state.errors = action.error.message
            state.users = []
        })
    }
    
})


export default userSlice.reducer