import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Container, Content, Icon, Card, CardItem, Thumbnail, Body, Left, Right, Button} from 'native-base';
const Drawer = createDrawerNavigator();


class CardComponent extends Component{
    render(){
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source = {require('../assets/icon.png')}/>
                        <Body>
                            <Text>Aryah Oztanir</Text><Text note>March 5, 2021</Text>
                        </Body>
                    </Left>
                    <Right>
                        {/* <Thumbnail source = {require('../assets/icon.png')}/> */}
                        <Body>
                            <Text style = {{padding: 15}}>Apples For Sale</Text>
                        </Body>
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Image source = {require('../assets/icon.png')} style = {{height:200,width:null, flex: 1}}/>
                </CardItem>
                <CardItem style = {{height: 45}}>
                    <Left>
                        {/* <Button transparent>
                            <Icon name="ios-outline" style = {{color: 'black'}}/>
                        </Button> */}
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style = {{color: 'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="person-outline" style = {{color: 'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
            // <NavigationContainer>
            //   <Drawer.Navigator initialRouteName="Home">
            //     <Drawer.Screen name="Home" component={} />
            //     <Drawer.Screen name="Notifications" component={} />
            //   </Drawer.Navigator>
            // </NavigationContainer>
          );

    }
  
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
