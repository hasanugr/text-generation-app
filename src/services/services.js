import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API = "https://baconipsum.com/";
export const getParagraphsAsync = createAsyncThunk(
  "paragraphs/getParagraphsAsync",
  async (data) => {
    const res = await axios.post(
      `${BASE_API}api?type=all-meat&paras=${data.paragraphCount}&start-with-lorem=1&format=${data.includeHtml}`
    );

    return res.data.split("\n");
  }
);
