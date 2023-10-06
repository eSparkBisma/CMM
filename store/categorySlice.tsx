import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Field {
  name: string;
  value: string;
}

export interface Category {
  [key: string]: Field; // Each category is an object with dynamic field names
}

export interface InitialState {
  categories: Category[];
}

const initialState: InitialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    deleteCategory: (state, action: PayloadAction<number>) => {
      state.categories.splice(action.payload, 1);
    },
    addFieldToCategory: (
      state,
      action: PayloadAction<{categoryId: number; field: Field}>,
    ) => {
      const {categoryId, field} = action.payload;
      const category = state.categories[categoryId];
      if (category) {
        // Use type assertion to specify the type of field.name and field.value
        (category as any)[field.name] = field.value;
      }
    },
    deleteFieldFromCategory: (
      state,
      action: PayloadAction<{categoryId: number; fieldName: string}>,
    ) => {
      const {categoryId, fieldName} = action.payload;
      const category = state.categories[categoryId];
      if (category && category[fieldName]) {
        // Use type assertion to specify the type of fieldName
        delete (category as any)[fieldName];
      }
    },
  },
});

export const {
  addCategory,
  addFieldToCategory,
  deleteCategory,
  deleteFieldFromCategory,
} = categorySlice.actions;

export default categorySlice.reducer;

// categories = [
//   category1: {
//     field1: SOMEvalue1,
//     field2: SOMEvalue2,
//   },
//   category2: {
//     field1: SOMEvalue,
//     field2: SOMEvalue,
//     field3: SOMEvalue,
//   },
//   ...
// ]
