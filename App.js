import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import Faleconosco from './views/Faleconosco'
import Home from './views/Home'
import Login from './views/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroEscola from './views/CadastroEscola';
import CadastroDoador from './views/CadastroDoador';
import Escola from './views/Escola';
import Doador from './views/Doador';


export default function App(){
  

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Faleconosco" component={Faleconosco} />
        <Stack.Screen name="CadastroEscola" component={CadastroEscola} />
        <Stack.Screen name="CadastroDoador" component={CadastroDoador} />
        <Stack.Screen name="Escola" component={Escola} />
        <Stack.Screen name="Doador" component={Doador} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}



