import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const expSlice = createSlice({
  name: 'exp',
  initialState,
  reducers: {
    flipexp: (state) => {
      state.value =!state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { flipexp } = expSlice.actions

export default expSlice.reducer