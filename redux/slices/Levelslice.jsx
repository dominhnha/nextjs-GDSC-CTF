import { createSlice } from '@reduxjs/toolkit'


const initialState =  {
    Level:0,
}

const Userslice = createSlice({
    name: 'Level',
    initialState,
    reducers: {
        setLevel(state, action) {
            console.log("LV action", action)
            state.Level = action.payload
        },
        
    },
})
export const {setLevel} = Userslice.actions

export default Userslice
