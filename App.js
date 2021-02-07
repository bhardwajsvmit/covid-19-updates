import 'react-native-gesture-handler';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import World from './World';
import India from './India'


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="World" component={World} />
        <Tab.Screen name="India" component={India}  />
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7390f0',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
