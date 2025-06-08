import { configureStore } from '@reduxjs/toolkit'
import skillReducer from '../features/detect/skillSlice'
import expReducer from '../features/detect/expSlice'
import educationReducer from '../features/detect/educationSlice'
import projectReducer from '../features/detect/projectSlice'

export const store = configureStore({
  reducer: {
    skill:skillReducer,
    exp:expReducer,
    education:educationReducer,
    project:projectReducer,
  },
})