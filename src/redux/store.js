import { configureStore } from "@reduxjs/toolkit";
import paragraphSlice from "./paragraphsSlice";

export default configureStore({
  reducer: {
    paragraphs: paragraphSlice,
  },
});
