import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Container, Content, Icon, Card, CardItem, Thumbnail, Body, Left, Right, Button} from 'native-base';
const Drawer = createDrawerNavigator();

import CardComponent from '../components/CardComponent'

export default function App() {
  return (
    <Container>
      <Content>
        <CardComponent/>
      </Content>
    </Container>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
