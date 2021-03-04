import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DatePickerAndroid, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';




import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/PostScreen'
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent'
// import OnboardingScreen from './screens/OnboardingScreen';
// import LoginScreen from './screens/LoginScreen';

import AppCall from './screens/AppCall';
// import RootStackScreen from './screens/RootStackScreen'
// import IntroScreen from './screens/IntroScreen'

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import IntroScreen from './screens/IntroScreen';
import AppScreen from './screens/AppCall'
import { useEffect } from 'react';
import { AuthContext } from './components/context';





const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();
const Stack = createStackNavigator();




function HomeApp() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>


      <Drawer.Navigator drawerContent={props => <DrawerContent {... props} /> } initialRouteName="Home">
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        {}
      </Drawer.Navigator>

  );
}

export default function App() {
  // const  [isLoading, setIsLoading] = React.useState(true);
  // const  [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ){
      case 'RETRIEVE_TOKEN':
        return{
          ... prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return{
          ... prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return{
          ... prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return{
          ... prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const authContext = React.useMemo(()=> ({
    signIn: async(userName, password) => {
      // setUserToken('ajdka');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      userToken = 'DFGDS';
      if (userName=='user' && password =='password'){
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e){
          console.log(e);
        }
        
      }
      dispatch({type: 'LOGIN', id: userName, token: userToken});
      
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e){
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
    signUp: async() => {
      setUserToken('ajdka');
      setIsLoading(false);
    },


  }), []);

  useEffect(()=> {
    setTimeout(async()=>{
      let userToken;
      userToken = null;
      //change to bypass get started screen
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e){
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken });
      console.log(" user token ", userToken)
      // setIsLoading(false);
    }, 1000);
  }, []);

  if ( loginState.isLoading){
    console.log("")
    return(
      <View style={{flex:1,justifyContent:'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="tomato"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken!=null ? (
           <Stack.Navigator headerMode='none'>
          <Stack.Screen name="App" component={HomeApp}/>
          </Stack.Navigator>
        )
      :
      <Stack.Navigator headerMode='none'>
        
        <Stack.Screen name="Onboarding" component={ OnboardingScreen}/>
        <Stack.Screen name="Intro" component={IntroScreen}/>
        <Stack.Screen  name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        
      </Stack.Navigator>
      }


    
    {/* <Drawer.Navigator drawerContent={props => <DrawerContent {... props} /> } >
      
      
      <RootStack.Screen name="Onboarding" component={ OnboardingScreen}/>
      <RootStack.Screen name="Intro" component={IntroScreen}/>
      <RootStack.Screen  name="Login" component={LoginScreen}/>
      <Drawer.Screen name="App" component={MainTabScreen}/>
      
      
  </Drawer.Navigator> */}
  
  </NavigationContainer>
      </AuthContext.Provider>
  );

  // return (
  //   // <View style={styles.container}>
  //   //   <Text>Open up App.js to start working on your app!</Text>
  //   //   <StatusBar style="auto" />
  //   // </View>
    
    
  //   <NavigationContainer>
     

  //     {/* <Drawer.Navigator drawerContent={props => <DrawerContent {... props} /> } initialRouteName="Home"> */}
  //     {/* <AppStack.Navigator  drawerContent={props => <DrawerContent {... props} /> } initialRouteName="Home"
  //       headerMode="none"> */}
  //       <RootStackScreen/>
  //         {/* <AppStack.Screen name="Onboarding" component ={OnboardingScreen}/>
  //         <AppStack.Screen name="Intro" component ={IntroScreen}/>
  //         <AppStack.Screen name="Login" component={LoginScreen}/>
  //         <AppStack.Screen name="App" component={MainTabScreen}/> */}
  //       {/* </AppStack.Navigator> */}
  //       {/* <Drawer.Screen name="HomeDrawer" component={MainTabScreen} /> */}
  //       {}
  //     {/* </Drawer.Navigator> */}
  //   </NavigationContainer>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
