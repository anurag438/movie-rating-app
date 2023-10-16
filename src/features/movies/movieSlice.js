import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import movieApi from "../../common/apis/MovieApi"
import {APIKey} from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",async()=>{
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    return response.data
})
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows",async()=>{
    const movieText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=series`)
    return response.data
})
const initialState = {
    movies:{},
    shows:{},
}
const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies = payload;
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("movies Fetched succesfully");
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("shows Fetched succesfully");
            return {...state,shows:payload}
        },
    }
})
export const {addMovies}=movieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;//state.movies(from name=movies).movies(from initalState)
export const getAllShows = (state)=>state.movies.shows;//state.movies(from name=movies).movies(from initalState)
export default movieSlice.reducer;