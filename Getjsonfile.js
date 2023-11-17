import React from 'react'
import Mahasiswa from './data/mahasiswa.json'
import { FlatList, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';

const Getjsonfile = () => {
  return (
      <FlatList
          data={Mahasiswa}
          renderItem={({ item }) => (
              <TouchableOpacity>
                  <View style={styles.card}>
                      <View style={styles.avatar}>
                          <FontAwesome5 name={item.icon} size={50} color={item.color} />
                      </View>
                      <View>
                          <Text style={styles.cardtitle}>{item.nama}</Text>
                          <Text style={styles.text}>NIM: {item.nim}</Text>
                          <Text style={styles.text}>Kelas: {item.kelas}</Text>
                          <Text style={styles.text}>Jenis Kelamin: {item.jeniskelamin}</Text>
                      </View>
                  </View>
              </TouchableOpacity>
          )}
      />

  )
}
const styles = StyleSheet.create({
    text: {
        color: 'black'
    },
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        borderRadius: 100,
        backgroundColor: 'white',
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardtitle: {
        fontSize: 13,
        fontWeight: 'bold',
        // backgroundColor: 'red',
        // height: 120,
        color: 'black'
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7
    },
})



export default Getjsonfile