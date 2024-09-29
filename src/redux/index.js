import { configureStore, createSlice } from '@reduxjs/toolkit';
import { fetchTranslations } from './asyncThunk';



const languageSlice = createSlice({
  name: 'language',
  initialState: {
    en: {},
    ru: {},
    status: false,
  },
  extraReducers: (builer) => {
    builer.addCase(fetchTranslations.fulfilled, (state, action) => {
         state.en = action.payload.i18next[1].en
         state.ru = action.payload.i18next[0].ru
         state.status = true
    })
}
});

const store = configureStore({
    reducer: languageSlice.reducer,
})


export default store