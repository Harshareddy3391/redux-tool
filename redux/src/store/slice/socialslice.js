import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
    name: 'social',
    initialState: {
        books: []
    },
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        }
    }
});

export const { addBook } = socialSlice.actions;
export default socialSlice.reducer;