import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


import Item from './item'
import { bandNames } from './bands';




export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {bandNames.map( band => <Item name={band} />)}
        <StatusBar style="auto" />
      </View>
    </ScrollView>    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
