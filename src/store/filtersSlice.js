
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  filters: {
    typeFil: [],
    sizeFil: [],
    quantityFil: [],
    
    стерильность: false,
    фильтр: false,
    функции: [],
  },
};

const filtersSlice = createSlice({
  name: 'toFilter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filterName, value } = action.payload;   // {имя фильтра, его значение}
    
    //Обработка фильтра "typeFil":  
    if (filterName === 'typeFil' || filterName === 'стерильность') {
      state.filters[filterName] = {
        ...state.filters[filterName],
        [value]: !state.filters[filterName][value]  //инвертируем текущее значение для выбранного фильтра
        };
    } else {
        if (Array.isArray(state.filters[filterName])) {
        // Обработка фильтров, хранящихся в массивах:
        if (state.filters[filterName].includes(value)) {  //если инпут-фильтра уже кликнут - при повторном клике удаляем его из активных:
          state.filters[filterName] = state.filters[filterName].filter(item => item !== value);
        } else {
          state.filters[filterName].push(value);  //если нет - при клике - добавляем инпут-фильтра в активные
        }
      } else {
        // Обработка других типов фильтров:
        state.filters[filterName] = !state.filters[filterName];  //инвертирование при клике на инпут-фильтра
      }
    }
  },

    resetFilters: (state) => {    //редуктор сброса фильтра
      //проверка, нужно ли сбрасывать фильтры:
      if (JSON.stringify(state.filters) !== JSON.stringify(initialState.filters)) {
          
            state.filters = { ...initialState.filters };  //возвращаемя в исходное состояние  initialState
      }
    },

  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
