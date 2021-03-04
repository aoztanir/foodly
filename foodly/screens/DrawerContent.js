import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DatePickerAndroid, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    // Text,
    TouchableRipple,
    Switch
} from  'react-native-paper';
import { AuthContext } from '../components/context';


export function DrawerContent(props){
    const { signOut } = React.useContext(AuthContext);

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {... props}>
                <View style = {styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source = {{
                                    uri: 'https://aryah.ml/static/img/profpfpcircleico.ico'

                                }}
                            />
                            <View style={{marginLeft: 15, fledDirection:'colomn'}}>
                                <Title>Aryah Oztanir</Title>
                                <Caption>aoztanir</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph  style={styles.paragraph} >80</Paragraph>
                                <Caption  style={styles.caption} >Foods Listed</Caption>
                            </View>
                            <View  style={styles.section} >
                                <Paragraph style={styles.paragraph} >100</Paragraph>
                                <Caption style={styles.caption}>Foods Bought</Caption>
                            </View>

                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="food-apple-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Explore"
                            onPress={() => {props.navigation.navigate('Explore')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="plus" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Post"
                            onPress={() => {props.navigation.navigate('Post')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="cog-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={{isDarkTheme}}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
  




            </DrawerContentScrollView>
            
            <Drawer.Section style={StyleSheet.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon name="exit-to-app" color={color} size={size}/>
                    )}
                    label="Sign Out"
                    onPress={()=>{signOut()}}
                    />
            </Drawer.Section>
        </View>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      fontSize: 14,
      lineHeight: 14
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });