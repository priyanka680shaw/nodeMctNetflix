import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slice/User.Slice'
import movieSlice from './Slice/Movie.slice'
const reduxStore = configureStore({
    reducer : {
        userReducer , movieSlice
    }
})

export default reduxStore  ;