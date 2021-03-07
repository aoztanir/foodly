import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './OnboardingScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import IntroScreen from './IntroScreen';
import AppScreen from './AppCall'

const RootStack = createStackNavigator();

function Home() {
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


const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="App" component={Home()}/>
        <RootStack.Screen name="Onboarding" component={ OnboardingScreen}/>
        <RootStack.Screen name="Intro" component={IntroScreen}/>
        <RootStack.Screen  name="Login" component={LoginScreen}/>
        
        
    </RootStack.Navigator>
);

export default RootStackScreen;