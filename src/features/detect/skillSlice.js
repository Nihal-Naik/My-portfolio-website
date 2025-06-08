import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    flipskill: (state) => {
      state.value =!state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { flipskill } = skillSlice.actions

export default skillSlice.reducer