import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getImg = createAsyncThunk(
  "img/imgAxiosData",
  async (imgId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://picsum.photos/id/${imgId}/info`
      );
      return response.data.download_url;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const imgSlice = createSlice({
  name: "img",
  initialState: {
    url: "",
    id: 1,
    loading: false,
    error: null,
  },
  reducers: {
    addID: (state) => {
      state.id += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImg.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.url = null;
      })
      .addCase(getImg.fulfilled, (state, action) => {
        state.loading = false;
        state.url = action.payload;
      })
      .addCase(getImg.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { addID } = imgSlice.actions;
export const selectImgUrl = (state) => state.img.url;
export const selectImgId = (state) => state.img.id;
export const imgReducer = imgSlice.reducer;
