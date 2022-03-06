import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Feature from './details'


function Bands(props) {
    // const { name } = props
    const { data } = props
    // const keys = Object.keys(data)

    const internationalNumberFormat = new Intl.NumberFormat('en-US')
    
    // console.log(data)
    return (
        <View style={styles.container}>
            <Text style={styles.label }>{data.band_name}</Text>
            <Text style={styles.fans}>{internationalNumberFormat.format(data.fans * 1000)} </Text>
            <Text style={styles.origin}>{data.origin} </Text>
            <Text style={styles.split}>{data.split} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {   
        padding: 10,
        margin: 1,
       
    },
    label: {
        fontSize: 28,
        color: 'white',
    },
    fans: {
        fontSize: 28,
        color: 'white'
    },
    origin: {
        fontSize: 28,
        color: 'white'
    },
    split: {
        fontSize: 28,
        color: 'white'
    },
  });
  
export default Bands