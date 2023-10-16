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
export const fetchAsyncMovieOrShowDetail = createAsyncThunk("movies/fetchAsyncMovieOrShowDetail",async(id)=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data
})
const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow:{},
}
const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        removeSlectedMovieOrShow:(state)=>{
            state.selectMovieOrShow={};
        }
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
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("shows/movie detail Fetched succesfully");
            return {...state,selectMovieOrShow:payload}
        },
    }
})
export const {removeSlectedMovieOrShow}=movieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;//state.movies(from name=movies).movies(from initalState)
export const getAllShows = (state)=>state.movies.shows;
export const getSelectedMovieOrShow = (state)=>state.movies.selectMovieOrShow;

export default movieSlice.reducer;