import { View ,StyleSheet, FlatList, SafeAreaView } from 'react-native';


import { bandNames } from './bands';
import StatsScreen from './stats';
import StylesScreen from './style';

import { Ionicons } from 'react-native-vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bands from './item';


function BandsScreen() {
  return (
    <SafeAreaView style={styles.listContainer}>
      <View style={styles.bands}>
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

function StyleScreen() {
  return (
    <FlatList
      data={bandNames}
      renderItem={({ item }) => {
        return <StylesScreen data={item}/>
      }}
      keyExtractor={item => item.style}
    />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return ( 
    <NavigationContainer style={styles.navigation}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    backgroundColor: 'black'
  },
  bands: {
    backgroundColor: 'black',
  }
});
