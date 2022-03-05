import { StatusBar } from 'expo-status-bar';
import { View ,StyleSheet, FlatList, SafeAreaView } from 'react-native';


import Item from './item'
import { bandNames } from './bands';
import StatsScreen from './stats';

import { Ionicons } from 'react-native-vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bands from './item';


function BandsScreen() {
  return (
    <SafeAreaView style={styles.listContainer}>
      <View>
        <FlatList
            data={bandNames}
            renderItem={({ item }) => {
              return <Bands data={item}/>
            }}
            keyExtractor={item => item.ID}
          />
      </View>
    </SafeAreaView>  
  );
}

// function StatsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
      
            if (route.name === 'Bands') {
              iconName = focused ? 'musical-notes' : 'musical-notes-outline';
            } else if (route.name === 'Stats') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            } else if (route.name === 'Styles') {
              iconName = focused ? 'disc' : 'disc-outline';
            }
      
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Bands" component={BandsScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
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
