import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Dimensions} from 'react-native';
import {Appbar, Button, Text} from 'react-native-paper';
import AddCategoryTray from '../components/AddCategoryTray';

type ManageCategoriesScreen = {
  navigation: NativeStackNavigationProp<any>;
};

const ManageCategoriesScreen: React.FC = () => {
  const [categoryTrays, setCategoryTrays] = useState<React.ReactNode[]>([]);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  console.log('height: ', screenHeight);
  console.log('width: ', screenWidth);
  const isTablet = screenWidth >= 800 && screenHeight >= 700;

  const addCategoryTray = () => {
    const newCategoryTray = <AddCategoryTray key={categoryTrays.length} />;
    setCategoryTrays(prevTrays => [...prevTrays, newCategoryTray]);
  };

  return (
    <View style={{flex: 1}}>
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
      <View style={{flex: 1, alignSelf: 'center'}}>
        <FlatList
          data={categoryTrays}
          renderItem={({item, index}) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          )}
          contentContainerStyle={{flexGrow: 1}}
          ListEmptyComponent={
            <Text style={{alignSelf: 'center', marginVertical: '2%'}}>
              No categories to display
            </Text>
          }
          keyExtractor={(item, index) => index.toString()}
          style={styles.FlatList}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={addCategoryTray}>
          ADD NEW CATEGORY
        </Button>
      </View>
    </View>
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
  FlatList: {
    width: '100%',
  },
  Button: {
    padding: 0,
    borderRadius: 2,
    width: '95%',
    height: 40,
    marginBottom: 10,
  },
});
