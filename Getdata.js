import { React, useState, useEffect } from 'react'
import { FlatList, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';

const Callapi = () => {
    const jsonUrl = 'http://10.0.2.2:3000/mahasiswa';
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

    function deleteData(id) {
        fetch(jsonUrl + '/' + id, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                alert('Data terhapus');
                refreshPage();
            })
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
                                <View>
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
                                    <View style={styles.form}>
                                        <Button title="Hapus"
                                            onPress={() => Alert.alert('Hapus data', 'Yakin akan menghapus data ini?', [
                                                { text: 'Tidak', onPress: () => console.log('button tidak') },
                                                { text: 'Ya', onPress: () => deleteData(item.id) },
                                            ])}
                                            color={'red'}
                                        />
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
        color: 'black'
    },
    card: {
        flexDirection: 'row',
        marginTop: 20,
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
    form: {
        borderRadius: "20",
        marginLeft: 20,
        marginRight: 20
    }
})

export default Callapi