import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DatePickerAndroid, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import HomeScreen from './HomeScreen';
import PostScreen from './PostScreen';




const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const PostStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();








const MainTabScreen = () => (

        <Tab.Navigator
          initialRouteName="Home"
          activeColor="black"
          barStyle={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: 'tomato',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreStackScreen}
            options={{
              tabBarLabel: 'Explore',

              tabBarColor: 'darkorange',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="food-apple-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Post"
            component={PostStackScreen}
            options={{
              tabBarLabel: 'Post',
              tabBarColor: 'goldenrod',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="plus" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: 'orange',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-outline" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
   
);

export default MainTabScreen;

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// const Tab = createMaterialBottomTabNavigator();

const ProfileStackScreen = ({navigation})=> (
  <ProfileStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ProfileStack.Screen name="home" component = {ProfileScreen} options = {{
      title: 'Profile',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size = {25}
        backgroundColor="#009387" onPress = {() => {navigation.openDrawer()}}></Icon.Button>
      )
    }} />
  </ProfileStack.Navigator>
);





const HomeStackScreen = ({navigation})=> (
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387',
  
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="home" component = {HomeScreen} options = {{
        title: 'Home',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size = {25}
          backgroundColor="#009387" onPress = {() => {navigation.openDrawer()}}></Icon.Button>
        )
      }} />
    </HomeStack.Navigator>
  );



  const ExploreStackScreen = ({navigation})=> (
    <ExploreStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387',
  
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ExploreStack.Screen name="home" component = {HomeScreen} options = {{
        title: 'Explore',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size = {25}
          backgroundColor="#009387" onPress = {() => {navigation.openDrawer()}}></Icon.Button>
        )
      }} />
    </ExploreStack.Navigator>
  );
  
  
  const PostStackScreen = ({navigation})=> (
    <PostStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387',
  
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <PostStack.Screen name="Details" component = {PostScreen} options = {{
        title: 'Post',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size = {25}
          backgroundColor="#009387" onPress = {() => {navigation.openDrawer()}}></Icon.Button>
        )
      }} />
    </PostStack.Navigator>
  );
  
  