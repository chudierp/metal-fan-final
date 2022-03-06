import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


function StylesScreen(props) {
    const { data } = props
    console.log(data)

    return (
        <View style={styles.container}>
            <Text style={styles.style} >{ data.style } </Text>
        </View>
)

}

const styles = StyleSheet.create({
    container: {   
        padding: 10,
        margin: 1,
        backgroundColor: 'black',
    },
    style: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });
  


export default StylesScreen;


