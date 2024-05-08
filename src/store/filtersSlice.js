
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  filters: {
    вид: [],
    size: [],
    стерильность: false,
    фильтр: false,
    количество: [],
    функции: [],
  },
};

const filtersSlice = createSlice({
  name: 'toFilter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filterName, value } = action.payload;
      if (Array.isArray(state.filters[filterName])) {
        // Обработка фильтров, хранящихся в массивах
        if (state.filters[filterName].includes(value)) {
          state.filters[filterName] = state.filters[filterName].filter(item => item !== value);
        } else {
          state.filters[filterName].push(value);
        }
      } else {
        // Обработка других типов фильтров
        state.filters[filterName] = !state.filters[filterName];
      }
    },

    resetFilters: (state) => {    //редуктор сброса фильтра
      state.filters = { ...initialState.filters };
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
