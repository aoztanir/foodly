import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DatePickerAndroid, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './PostScreen'
import MainTabScreen from './MainTabScreen';
import { DrawerContent } from './DrawerContent'
import OnboardingScreen from './OnboardingScreen';
import LoginScreen from './LoginScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    
    
    <NavigationContainer>

      <Drawer.Navigator drawerContent={props => <DrawerContent {... props} /> } initialRouteName="Home">
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        {}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
