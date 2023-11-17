import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App'
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Callapi from '../Callapi';
import Countnumber from '../Countnumber';
import Getdata from '../Getdata';
import Createdata from '../Createdata';
import Editdata from '../Editdata';

const Tab = createBottomTabNavigator();
const webMap = require('../peta/map.html')

function ProductScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>My Map</Text>
            <View style={styles.listitems}>
                <Image source={require('../peta/peta1.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Probabilitas Kebakaran</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/peta1.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Probabilitas Kebakaran</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/peta1.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Probabilitas Kebakaran</Text>
            </View>
        </ScrollView>
    );
}

// function MapScreen() {
//     return (
//         <WebView
//             source={ webMap }
//         />
//     );
// }

function ProfileScreen() {
    return (
       <Portofolio/>
    );
}
function GetData() {
    return (
       <Getdata/>
    );
}
function CreateData() {
    return (
       <Createdata/>
    );
}

function EditData(){
    return (
        <Editdata/>
    );
}

// function MahasiswaScreen() {
//     return (
//        <Getjsonfile/>
//     );
// }

function Count() {
    return (
       <Countnumber/>
    );
}

function ApiScreen() {
    return (
       <Callapi/>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                {/* <Tab.Screen name="ProductScreen" component={ProductScreen} options={{
                    tabBarLabel: 'Product',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="home" color={color} size={size} />
                    ),
                }}/> */}

                {/* <Tab.Screen name="MapScreen" component={MapScreen} options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="map" color={color} size={size} />
                    ),
                }}/> */}

                <Tab.Screen name="Edit" component={EditData} options={{
                    tabBarLabel: 'Edit',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user-edit" color={color} size={size} />
                    ),
                }}/>

                <Tab.Screen name="Hapus" component={GetData} options={{
                    tabBarLabel: 'Hapus',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="trash-alt" color={color} size={size} />
                    ),
                }}/>

                <Tab.Screen name="CreateData" component={CreateData} options={{
                    tabBarLabel: 'Create',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user-plus" color={color} size={size} />
                    ),
                }} />

                {/* <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user-circle" color={color} size={size} />
                    ),
                }}/> */}
                
                {/* <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
                    tabBarLabel: 'Mahasiswa',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="users" color={color} size={size} />
                    ),
                }}/> */}

                {/* <Tab.Screen name="count" component={Count} options={{
                    tabBarLabel: 'Count',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="calculator" color={color} size={size} />
                    ),
                }}/> */}

                {/* <Tab.Screen name="API" component={ApiScreen} options={{
                    tabBarLabel: 'API',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user-secret" color={color} size={size} />
                    ),
                }}/> */}

            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    }
})

export default MyTabs;