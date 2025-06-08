import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    flipeducation: (state) => {
      state.value =!state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { flipeducation } = educationSlice.actions

export default educationSlice.reducer