import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    flipproject: (state) => {
      state.value =!state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { flipproject } = projectSlice.actions

export default projectSlice.reducer