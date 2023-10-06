import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Button, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import AddCategoryTray from '../components/AddCategoryTray';
import {InitialState} from '../store/categorySlice';
import {
  addCategory,
  deleteCategory,
  addFieldToCategory,
  deleteFieldFromCategory,
} from '../store/categorySlice';
import categorySlice from '../store/categorySlice';

type ManageCategoriesScreen = {
  navigation: NativeStackNavigationProp<any>;
};

const ManageCategoriesScreen: React.FC = () => {
  const categories = useSelector((state: InitialState) => state.categories);
  const [categoryTrays, setCategoryTrays] = useState<React.ReactNode[]>([]);

  const addCategoryTray = () => {
    const newCategoryTray = <AddCategoryTray key={categoryTrays.length} />;
    setCategoryTrays(prevTrays => [...prevTrays, newCategoryTray]);
  };
  return (
    <>
      <Appbar.Header style={{height: 50}}>
        <Appbar.Action
          icon="menu"
          onPress={() => {
            console.log('open drawer');
          }}
        />
        <View style={styles.titleContainer}>
          <Appbar.Content
            title={'Manage Categories'}
            titleStyle={{fontWeight: '700'}}
          />
        </View>
      </Appbar.Header>
      <View style={styles.mainContainer}>
        {categoryTrays.length === 0 ? (
          <Text style={{paddingBottom: 20}}>No Categories To Display</Text>
        ) : null}
        {categories.map((category: any) => (
          <View key={category.id}>
            <Text>{category.name}</Text>
            {/* Render fields or additional category information here */}
          </View>
        ))}
        {categoryTrays.map((tray, index) => (
          <View key={index}>{tray}</View>
        ))}
        <Button
          style={styles.Button}
          mode="contained"
          onPress={addCategoryTray}>
          ADD NEW CATEGORY
        </Button>
      </View>
    </>
  );
};

export default ManageCategoriesScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -50,
    marginTop: 13,
  },
  mainContainer: {
    flex: 1,
    marginVertical: 5,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    // maxHeight: '80%',
    justifyContent: 'space-between',
  },
  Button: {
    padding: 0,
    borderRadius: 2,
    width: '95%',
    height: 40,
  },
});
