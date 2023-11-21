import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App'
import { WebView } from 'react-native-webview';
import Callapi from '../Callapi';

const Tab = createBottomTabNavigator();
// const webMap = require('../peta/map.html')
const formInput = 'https://ferryferdyansyah.github.io/pgpbl-12/';
const webMap = 'https://ferryferdyansyah.github.io/pgpbl-12/map.html'

function MapScreen() {
    return (
        <WebView
            source={ {uri: webMap} }
        />
    );
}

function AddDataScreen() {
    return (
        <WebView
            source={ {uri: formInput} }
        />
    );
}

function HomeScreen() {
    return (
       <View style={styles.container}>
           <View style={styles.subContainer}>
                <Text style={styles.title}>Aplikasi Peta Lokasi Objek</Text>
                <Text style={styles.text}>Stack:</Text>
                <Text style={{color: 'black'}}>1. React Native</Text>
                <Text style={{color: 'black'}}>2. HTML</Text>
                <Text style={{color: 'black'}}>3. Leaflet JS</Text>
                <Text style={{color: 'black'}}>4. Google Sheets</Text>
                <Text style={{color: 'black'}}>5. App Script</Text>
                <Text style={{color: 'black'}}>6. Font Awesome</Text>
                <Text style={{color: 'black'}}>7. Github</Text>
            </View>
       </View>
    );
}

function ApiScreen() {
    return (
        <Callapi />
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Homescreen" component={HomeScreen} options={{
                    tabBarLabel: 'Homescreen',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="home" color={color} size={size} />
                    ),
                }}/>

                <Tab.Screen name="Map" component={MapScreen} options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="map" color={color} size={size} />
                    ),
                }}/>

                <Tab.Screen name="Add Data" component={AddDataScreen} options={{
                    tabBarLabel: 'Add Data',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user-plus" color={color} size={size} />
                    ),
                }} />

                <Tab.Screen name="Api Data" component={ApiScreen} options={{
                    tabBarLabel: 'Api Data',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="users" color={color} size={size} />
                    ),
                }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
        height: '100%'
        // marginVertical: '50%'
    },
    subContainer: {
        // backgroundColor: 'red'
    },
    text:{
        color: 'black',
        fontSize: 16,
        marginTop: 5
    },
    listitems:{
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'stretch'
    },
    caption: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    }
})

export default MyTabs;