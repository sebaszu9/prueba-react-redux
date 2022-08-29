import { createSlice } from '@reduxjs/toolkit'

export const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: {
    list: [],
    value: '',
    categories: '',
    url: '',
    isLoading:true
  },
  reducers: {
    setCategorias: (state,action) => { 
      state.list = action.payload
      state.isLoading = false
    } , 
    setValueCategoria: (state,action) => { 
      state.value = action.payload 
    } ,
    setNameCategoria: (state,action) => { 
      state.categories = action.payload 
    } ,
    setUrlCategoria: (state,action) => { 
      state.url = action.payload 
    } ,
  }
})

// Action creators are generated for each case reducer function
export const { setCategorias, setValueCategoria, setNameCategoria, setUrlCategoria } = categoriasSlice.actions

export default categoriasSlice.reducer