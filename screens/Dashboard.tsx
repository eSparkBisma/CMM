import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Appbar, Button, Text} from 'react-native-paper';
import ManageCategoriesScreen from './ManageCategoriesScreen';

type DashboardProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Dashboard: React.FC<DashboardProps> = ({navigation}) => {
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
            title={'Dashboard'}
            titleStyle={{fontWeight: '700'}}
          />
        </View>
      </Appbar.Header>
      <View style={styles.mainContainer}>
        <Text style={{paddingBottom: 20}}>No Categories Found</Text>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={() => navigation.navigate('ManageCategoriesScreen')}>
          ADD A CATEGORY
        </Button>
      </View>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -50,
    marginTop: 13,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    padding: 0,
    borderRadius: 2,
    width: 'auto',
    height: 40,
  },
});
