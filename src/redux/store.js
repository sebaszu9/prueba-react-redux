import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import categoriasSlice from './categoriasSlice'

export default configureStore({
  reducer: {
    categorias: categoriasSlice
  }
})