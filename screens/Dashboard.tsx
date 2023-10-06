import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

type DashboardProps = {
  navigation: NativeStackNavigationProp<any>; // You can replace 'any' with your specific stack's navigation type
};

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <View>
      <Text>Dashboard screen</Text>
      <Button
        style={{backgroundColor: 'red'}}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Add a Category
      </Button>
    </View>
  );
};

export default Dashboard;
