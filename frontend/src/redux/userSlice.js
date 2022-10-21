import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Victor",
    age: "22",
    about: "Coder",
    avaUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2bbad678-25db-4953-aed1-24f458d9e85b/dcmkj95-43c3862c-401d-4d0a-93f3-6f928304051e.png/v1/fill/w_894,h_894,strp/chibi_avatar___akiyama_mio_by_mrtapoz_kun_dcmkj95-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzJiYmFkNjc4LTI1ZGItNDk1My1hZWQxLTI0ZjQ1OGQ5ZTg1YlwvZGNta2o5NS00M2MzODYyYy00MDFkLTRkMGEtOTNmMy02ZjkyODMwNDA1MWUucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kia6Oe2hyd3p4HoY8aaruG3oisSJAa5y2yqxp8mSjmM",
    themeColor: "#ff9051",
    pending: false,
    error: false,
  },
  reducers: {
    // updateStart: (state) => {
    //   state.pending = true;
    // },
    // updateError: (state) => {
    //   state.pending = false;
    //   state.error = true;
    // },
    // updateSuccess: (state, action) => {
    //   state.pending = false;
    //   state.error = false;

    //   state.name = action.payload.name;
    //   state.age = action.payload.age;
    //   state.about = action.payload.about;
    //   state.avaUrl = action.payload.avaUrl;
    //   state.themeColor = action.payload.themeColor;
    // },
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
