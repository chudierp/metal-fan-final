import React from 'react'
import {View, Text} from 'react-native'

function Item(props) {
    const { name } = props
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default Item