import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  Category,
  addCategory,
  addFieldToCategory,
} from '../store/categorySlice';
import {RootState} from '../store/store';

const AddCategoryTray: React.FC = () => {
  const [categoryName, setCategoryName] = useState('');
  const [newFieldName, setNewFieldName] = useState('');
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories); // Use RootState for type inference

  const handleAddCategory = () => {
    if (categoryName.trim() === '') {
      return;
    }

    const newCategory: Category = {
      [categoryName]: {}, // Create a new category with an empty object
    };

    dispatch(addCategory(newCategory));

    // Clear the input field
    setCategoryName('');
  };

  const handleAddFieldToCategory = () => {
    if (newFieldName.trim() === '') {
      return;
    }

    // Assuming you want to add a new field to the last category in the list
    if (categories.length > 0) {
      const lastCategoryId = categories.length - 1;
      const category = {...categories[lastCategoryId]}; // Create a copy of the last category
      category[newFieldName] = ''; // Initialize with an empty value
      dispatch(
        addFieldToCategory({
          categoryId: lastCategoryId,
          field: {name: newFieldName, value: ''},
        }),
      );

      // Clear the input field for new field name
      setNewFieldName('');
    }
  };

  return (
    <View>
      <TextInput
        label={'Category Name'}
        value={categoryName}
        onChangeText={text => setCategoryName(text)}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleAddCategory}>
        Add Category
      </Button>
      <View>
        <TextInput
          label={'Add Field'}
          value={newFieldName}
          onChangeText={text => setNewFieldName(text)}
          mode="outlined"
        />
        <Button mode="contained" onPress={handleAddFieldToCategory}>
          Add Field
        </Button>
      </View>
    </View>
  );
};

export default AddCategoryTray;
