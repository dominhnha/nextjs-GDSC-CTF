import { configureStore } from '@reduxjs/toolkit'
import Userslice from '../slices/Userslice'
import Levelslice from '../slices/Userslice'

const store = configureStore({
    reducer:{
        User: Userslice.reducer,
        Level: Levelslice.reducer,
    }
})
export default store