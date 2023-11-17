import {React, useState} from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const Countnumber = () => {
    const [number, setNumber] = useState(0)
  return (
    <View style={styles.container}>
        <Text style={styles.teks}>{number}</Text>
        <Button title="Tambah" onPress={() => setNumber(number+1)}></Button>
        <Button title="Reset"  onPress={() => setNumber(0)}></Button>
        <Button title="Kurang" onPress={() => setNumber((number) => number - 1 === -1 ? 0 : number - 1)}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    teks:{
        color: 'black',
        fontSize:30,
        fontWeight: 'bold',
        textAlign:'center',
        // backgroundColor: 'green',
        justifyContent: 'center'
    },
    container:{
        display: 'flex',
        // backgroundColor: 'red',
        height: '100%',
        // width: '100%',
        justifyContent: 'center',
        // alignItems: 'center'
    }
})

export default Countnumber