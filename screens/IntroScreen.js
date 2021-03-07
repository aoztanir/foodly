import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={} />
    //     <Drawer.Screen name="Notifications" component={} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
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



// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// // import Onboarding from 'react-native-onboarding-swiper';

// const Dots = ({selected}) => {
//     let backgroundColor;

//     backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

//     return (
        
//         <View style={styles.container}
//             style={{
//                 width:6,
//                 height: 6,
//                 marginHorizontal: 3,
//                 backgroundColor
//             }}
//         />
//     );
// }

// const Skip = ({...props}) => (
//     <TouchableOpacity
//         style={{marginHorizontal:10, marginLeft: 30}}
//         {...props}
//     >
//         <Text style={{fontSize:16, fontWeight: 'bold'}}>Skip</Text>
//     </TouchableOpacity>
// );

// const Next = ({...props}) => (
//     <TouchableOpacity
//         style={{marginHorizontal:10, marginRight: 30}}
//         {...props}
//     >
//         <Text style={{fontSize:16, fontWeight: 'bold'}}>Next</Text>
//     </TouchableOpacity>
// );

// const Done = ({...props}) => (
//     <TouchableOpacity
//         style={{marginHorizontal:10,fontWeight: 'bold', marginRight: 30}}
//         {...props}
//     >
//         <Text style={{fontSize:16, fontWeight: 'bold'}}>Done</Text>
//     </TouchableOpacity>
// );

// const OnboardingScreen = ({navigation}) => {
//     return (
        
        
//         <Onboarding
//         // controlStatusBar={true}
        
//         SkipButtonComponent={Skip}
//         NextButtonComponent={Next}
//         DoneButtonComponent={Done}
//         DotComponent={Dots}
//         onSkip={() => navigation.navigate("App")}
//         onDone={() => navigation.navigate("App")}
//         showDone={true}
//         pages={[
//           {

//             backgroundColor: '#a6e4d0',
//             // controlStatusBar: true,
            
//             image: <Image source={require('../assets/onboarding-img1.png')} />,
//             title: 'Take A Picture Of Your Homegrown Food',
//             subtitle: '',
//           },
//           {

//             backgroundColor: '#fdeb93',
//             // controlStatusBar: true,
//             image: <Image source={require('../assets/onboarding-img1.png')} />,
//             title: 'Let Our App Do the Magic',
//             subtitle: '',
//           },
//           {
//             backgroundColor: '#e9bcbe',
//             // controlStatusBar: true,
//             image: <Image source={require('../assets/onboarding-img1.png')} />,
//             title: 'Sell It To Others!',
//             subtitle: "",
//           },
//         ]}
//       />
//     );
// };

// export default OnboardingScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     // backgroundColor: 'white',
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });
