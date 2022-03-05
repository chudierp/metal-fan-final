import { StatusBar } from 'expo-status-bar';
import { View ,StyleSheet, FlatList, SafeAreaView } from 'react-native';


import Item from './item'
import { bandNames } from './bands';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen() {
  return (
    <SafeAreaView style={styles.listContainer}>
      <View>
        <FlatList
            data={bandNames}
            renderItem={({ item }) => {
              return <Item data={item}/>
            }}
            keyExtractor={item => item.ID}
          />
      </View>
    </SafeAreaView>  
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function StyleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <SafeAreaView style={styles.listContainer}>
    //   <View>
    //     <FlatList
    //         data={bandNames}
    //         renderItem={({ item }) => {
    //           return <Item data={item}/>
    //         }}
    //         keyExtractor={item => item.ID}
    //       />
    //     </View>
    // </SafeAreaView>  
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Bands" component={HomeScreen} />
        <Tab.Screen name="Stats" component={SettingsScreen} />
        <Tab.Screen name="Styles" component={StyleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
