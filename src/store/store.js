import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';

//передаём в store редукторы:
const store = configureStore({
  reducer: {
    toFilter: filtersReducer,  //toFilter - имя слайса
  },
});

export default store