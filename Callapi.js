import {React, useState, useEffect} from 'react'
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';

const Callapi = () => {
    const jsonUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=Tnnhgc2Z2zkCSmT7fljbXAwd0fOOxAdgFNQ3prp32bOH2LDwOsuEVEE3uiFOk7HzRE-GpXL3n62B6TJIzal8XuY3qkBLAxaZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO9mRq3DA5hWXXNAUfKbhETgSZODpmSQOJaU6jHL9hNoDKUYtGnZQRzTrx7Crc0j8dtwYKzQPRgvi1v-wOA4hkFbceTGl9d-Eg&lib=MG4FWbhyQ9d-sSABFCti1z8Onzbz-2L4C';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    // Gunakan useEffect untuk melakukan fetch API
    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    // Buat function refreshPage untuk reload data
    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

  return (
      <SafeAreaView>
          {isLoading ? (
              <View>
                  <Text style={styles.text}>Loading...</Text>
              </View>
          ) : (
              <View>
                  <FlatList
                      data={dataUser}
                      onRefresh={() => { refreshPage() }}
                      refreshing={refresh}
                      keyExtractor={({ id }, index) => id}
                      renderItem={({ item }) => (
                          <TouchableOpacity>
                              <View style={styles.card}>
                                  <View style={styles.avatar}>
                                      <FontAwesome5 name={item.icon} size={50} color={item.color} />
                                  </View>
                                  <View>
                                      <Text style={styles.cardtitle}>{item.nama}</Text>
                                      <Text>NIM: {item.nim}</Text>
                                      <Text>Kelas: {item.kelas}</Text>
                                      <Text>Jenis Kelamin: {item.jeniskelamin}</Text>
                                  </View>
                              </View>
                          </TouchableOpacity>
                      )}
                  />
              </View>
          )}
      </SafeAreaView>

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
        backgroundColor: 'grey',
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardtitle: {
        fontSize: 13,
        fontWeight: 'bold',
        // backgroundColor: 'red',
        // height: 120,
        color: 'white'
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'grey',
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

export default Callapi