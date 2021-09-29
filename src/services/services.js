import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getParagraphsAsync = createAsyncThunk(
  "paragraphs/getParagraphsAsync",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}api?type=all-meat&paras=${data.paragraphCount}&start-with-lorem=1&format=${data.includeHtml}`
    );

    return res.data.split("\n");
  }
);
