import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Category {
  id: number;
  name: string;
}

export interface CategoryState {
  categories: Category[];
  title: string;
  isEditing: boolean;
  currentIndex: number;
}

export const initialState: CategoryState = {
  categories: [],
  title: '',
  isEditing: false,
  currentIndex: 0,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: state => {
      const newCategory: Category = {
        id: state.categories.length + 1,
        name: state.title,
      };
      state.categories.push(newCategory);
    },
    addingCategory: (state, action) => {
      state.title = action.payload;
    },
    deleteCategory: (state, action: PayloadAction<{id: number}>) => {
      state.categories = state.categories.filter(
        category => category.id !== action.payload.id,
      );
    },
    editingCategory: (state, action) => {
      state.title = action.payload;
    },
    isEditingCategory: (state, action) => {
      state.currentIndex = action.payload;
      state.title = state.categories[state.currentIndex].name;
      state.isEditing = true;
    },
  },
});

export const {
  addCategory,
  addingCategory,
  deleteCategory,
  isEditingCategory,
  editingCategory,
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
