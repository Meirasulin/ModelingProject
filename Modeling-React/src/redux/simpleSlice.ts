import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { TypePostInfo } from "../Features/types/postsTypes";

type initialStateType = {posts: TypePostInfo[]}
const initialState: initialStateType = {
    posts: []
};

const simpleSlice = createSlice({
  name: "simple",
  initialState,
  reducers: {
    insertPostsList: (state, action: PayloadAction<TypePostInfo[]>) => {
        state.posts = [...action.payload]
    },
    addNewPost: (state, action: PayloadAction<TypePostInfo>) => {
        state.posts = [...state.posts, action.payload]
    },
  },
});


export const { insertPostsList, addNewPost } = simpleSlice.actions

export default simpleSlice.reducer