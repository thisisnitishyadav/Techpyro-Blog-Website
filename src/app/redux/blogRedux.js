import {createSlice} from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: [],
        isFetching: false,
        error: false,
    },
    reducers: {
         // get all
         getblogStart:(state)=>{
            state.isFetching = true
            state.error = false
         },
         getblogSuccess: (state, action)=>{
          state.isFetching = false;
          state.blogs = action.payload;

         },
         getblogFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
         },
          // delete 
          deleteblogStart:(state)=>{
            state.isFetching = true
            state.error = false
         },
         deleteblogSuccess: (state, action)=>{
          state.isFetching = false;
          state.blogs.splice(
            state.blogs.findIndex((item)=>item._id === action.payload),
            1
          );
         },
         deleteblogFailure: (state)=>{
            state.isFetching = null;
            state.error = true;
         },
            //Update 
            updateblogStart:(state)=>{
               state.isFetching = true
               state.error = false
            },
            updateblogSuccess: (state, action)=>{
             state.isFetching = false;
             state.blogs[
               state.blogs.findIndex((item) => item._id === action.payload.id)
             ] = action.payload.blog;
            },
            updateblogFailure: (state)=>{
               state.isFetching = null;
               state.error = true;
            },
            //add
            addblogStart:(state)=>{
               state.isFetching = true
               state.error = false
            },
            addblogSuccess:  (state, action)=>{
             state.isFetching = false;
             state.blogs =  action.payload;
            },
            addblogFailure: (state)=>{
               state.isFetching = null;
               state.error = true;
            }


    },

})
export const {getblogStart, getblogSuccess, getblogFailure, deleteblogStart,deleteblogSuccess,deleteblogFailure, updateblogStart, updateblogSuccess, updateblogFailure ,addblogStart, addblogSuccess, addblogFailure} = blogSlice.actions;

export default blogSlice.reducer;