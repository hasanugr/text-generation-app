import { createSlice } from "@reduxjs/toolkit";
import { getParagraphsAsync } from "../services/services";

const paragraphSlice = createSlice({
  name: "paragraphs",
  initialState: {
    paragraphsArray: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [getParagraphsAsync.pending]: (state) => {
      state.status = "loading";
    },
    [getParagraphsAsync.fulfilled]: (state, action) => {
      state.paragraphsArray = action.payload;
      state.status = "succeeded";
    },
    [getParagraphsAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

//#region Selector Exports
export const selectParagraphs = (state) => state.paragraphs.paragraphsArray;
export const selectStatus = (state) => state.paragraphs.status;
//#endregion

export default paragraphSlice.reducer;
