import React from 'react';
import { Text, View, TextInput, Button,Image,TouchableOpacity  } from 'react-native';
import {styles} from './Css';



export default function CadastroEscola(props)
{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/doatech.png')} style={styles.logo}/>
            <Text>CADASTRO DA INSTITUIÇÃO ESCOLAR:</Text>
            <TextInput style={styles.input} placeholder="Nome da escola" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Endereço de email" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Senha" onChangeText={text=>setSenha(text)} secureTextEntry={true}/>
            <TextInput style={styles.input} placeholder="Direção" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Endereço" onChangeText={text=>setNome(text)}/>
            <Button style={styles.btnLogar} title='Cadastrar Escola' onPress={ ()=> props.navigation.navigate('Escola')}/>


            
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