import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Editdata = () => {

    const [selectedUser, setSelectedUser] = useState({});
    const jsonUrl = 'http://10.0.2.2:3000/mahasiswa';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    const [nama, setNama] = useState('');
    const [nim, setNim] = useState('');
    const [kelas, setKelas] = useState('');
    const [jeniskelamin, setJeniskelamin] = useState('');
    const [color, setColor] = useState('');
    const [icon, setIcon] = useState('');

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

    const selectItem = (item) => {
        setSelectedUser(item);
        setNama(item.nama);
        setNim(item.nim);
        setKelas(item.kelas);
        setJeniskelamin(item.jeniskelamin);
        setColor(item.color);
        setIcon(item.icon);
    }

    const submit = () => {
        const data = {
            nama: nama,
            nim: nim,
            kelas: kelas,
            jeniskelamin: jeniskelamin,
            color: color,
            icon: icon,
        };
        fetch(`http://10.0.2.2:3000/mahasiswa/${selectedUser.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                alert('Data berhasil diedit');
                setNama('');
                setNim('');
                setKelas('');
                setJeniskelamin('');
                setColor('');
                setIcon('');
                refreshPage();
                FlatList.refresh();
            })
    }

    return (
        <SafeAreaView>
            <View>
                {isLoading ? (
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={styles.cardtitle}>Loading...</Text>
                    </View>
                ) : (
                    <View>
                        <ScrollView>
                            <View>
                                <Text style={styles.title}>Edit Data Mahasiswa</Text>
                                <View style={styles.form}>
                                    <TextInput style={styles.input} placeholder="Nama" value={nama} onChangeText={(value) => setNama(value)} />
                                    <TextInput style={styles.input} placeholder="NIM" value={nim} onChangeText={(value) => setNim(value)} />
                                    <TextInput style={styles.input} placeholder="Kelas" value={kelas} onChangeText={(value) => setKelas(value)} />
                                    <TextInput style={styles.input} placeholder="Jenis Kelamin" value={jeniskelamin} onChangeText={(value) => setJeniskelamin(value)} />
                                    <TextInput style={styles.input} placeholder="Warna (HEX)" value={color} onChangeText={(value) => setColor(value)} />
                                    <TextInput style={styles.input} placeholder="Icon (Fontawesome 5)" value={icon} onChangeText={(value) => setIcon(value)} />
                                    <Button title="Edit" style={styles.button} onPress={submit} />
                                </View>
                            </View>
                            <View style={styles.devider}></View>
                            <FlatList
                                style={{ marginBottom: 10 }}
                                data={dataUser}
                                onRefresh={() => { refreshPage() }}
                                refreshing={refresh}
                                keyExtractor={({ id }, index) => id}
                                renderItem={({ item }) => (
                                    <View>
                                        <TouchableOpacity onPress={() => selectItem(item)}>
                                            <View style={styles.card}>
                                                <View style={styles.avatar}>
                                                    <FontAwesome5 name={item.icon} size={50} color={item.color} />
                                                </View>
                                                <View>
                                                    <Text style={styles.cardtitle}>{item.nama}</Text>
                                                    <Text>{item.nim}</Text>
                                                    <Text>{item.kelas}</Text>
                                                    <Text>{item.jeniskelamin}</Text>
                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                                    <FontAwesome5 name={'edit'} size={20} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />
                        </ScrollView>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    title: {
        paddingVertical: 12,
        // backgroundColor: 'white',
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    form: {
        padding: 10,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        color: "black",
        borderColor: 'black',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        marginVertical: 5,
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
        marginTop: 20,
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
    button: {
        marginVertical: 10,
    }
})

export default Editdata