import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Feature from './details'

function Item(props) {
    // const { name } = props
    const { data } = props
    const keys = Object.keys(data)

    const internationalNumberFormat = new Intl.NumberFormat('en-US')
    
    console.log(data)
    return (
        <View style={styles.container}>
            <Text style={styles.label }>{data.band_name}</Text>
            <Text style={styles.fans}>{internationalNumberFormat.format(data.fans * 1000)} </Text>
            <Text style={styles.origin}>{data.origin} </Text>
            <Text style={styles.split}>{data.split} </Text>
            {/* <Text style={styles.label}>{ data.style} </Text> */}
            {/* {keys.map(key => <Text>{key} {data[key]}</Text> )} */}
            {/* {keys.map(key => <Feature name={key} value={data[key]}/> )} */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {   
        padding: 10,
        margin: 1,
    },
    label: {
        fontSize: 28
    },
    fans: {
        fontSize: 28
    },
    origin: {
        fontSize: 28
    },
    split: {
        fontSize: 28
    },
  });
  
export default Item