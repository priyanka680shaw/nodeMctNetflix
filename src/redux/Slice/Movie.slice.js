import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovie : [],
    popular  :[],
    topRated  :[],
    upComing  :[]
}

const movieSlice = createSlice({
    name  : "MovieSlice" , 
    initialState,
    reducers : {
        setNowPlayingMovie : (state , action)=>{
            state.nowPlayingMovie = action.payload
        },
        setPopular  :(state , action)=>{
            state.popular = action.payload;
        },
        setTopRated  :(state , action)=>{
            state.topRated = action.payload
        },
        setUpComing : (state , action)=>{
            state.upComing = action.payload
        }
    }
})

export const {setNowPlayingMovie , setPopular , setTopRated , setUpComing} = movieSlice.actions
export default movieSlice.reducer