import { createSlice } from '@reduxjs/toolkit'


const initialState =  {
    success:false,
    payload:null
}

const Levelslice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser(state, action) {
            console.log("action", action)
            state.success = action.payload.success
            state.payload = action.payload.payload
        },
        removeUser(state, action) {
            console.log("action out", action)
            state.success = false
            state.payload = {}
        }
    },
})
export const {setUser, removeUser} = Levelslice.actions

export default Levelslice
