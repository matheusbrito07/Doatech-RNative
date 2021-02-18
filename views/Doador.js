import React from 'react';
import {styles} from './Css';
import { Text, View, TextInput, Button,Image,TouchableOpacity  } from 'react-native';

export default function Doador(props)
{

  
    return(
        <View style={styles.container}>
            <Text style={styles.textao} > ...AREA DO DOADOR... </Text>
            <Text style={styles.textao} > ...EM CONSTRUÇÃO... </Text>
            <Text style={styles.textao2}>NAO TEMOS DOADORES NO MOMENTO!</Text>
            

            
            <View style={styles.containerbtn}>
                <TouchableOpacity style={styles.btnlogin} title='Login' onPress={ ()=> props.navigation.navigate('Login')}>
                    <Image resizeMode='contain' source={require('../assets/loginicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Fale Conosco' onPress={ ()=> props.navigation.navigate('Faleconosco')}>
                    <Image resizeMode='contain' source={require('../assets/faleconoscoicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Cadastro Escola' onPress={ ()=> props.navigation.navigate('CadastroEscola')}>
                    <Image resizeMode='contain' source={require('../assets/schoolicon.png')} style={styles.iconlogin}/>
                 </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Cadastro Doador' onPress={ ()=> props.navigation.navigate('CadastroDoador')}>
                    <Image resizeMode='contain' source={require('../assets/usuarioicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Login Escola' onPress={ ()=> props.navigation.navigate('Escola')}> 
                    <Image resizeMode='contain' source={require('../assets/escolaloginicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Login Doador' onPress={ ()=> props.navigation.navigate('Doador')}>
                    <Image resizeMode='contain' source={require('../assets/doadorloginicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
            </View>

        </View>
    );
      

}