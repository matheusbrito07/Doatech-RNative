import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TextInput, Button,Image,TouchableOpacity  } from 'react-native';
import {styles} from './Css';

export default function Login(props)
{
    
    return(
        <View style={styles.container}>
            <Image source={require('../assets/doatech.png')} style={styles.logo}/>

            <TouchableOpacity>
                <Text style={{ marginTop: 30, fontSize:25, color:'#deb458',fontWeight: "bold", }}>Faça seu login:</Text>
            </TouchableOpacity>

            <TextInput style={styles.input} placeholder="Digite seu usuário" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={text=>setSenha(text)} secureTextEntry={true}/>

            <TouchableOpacity style={{backgroundColor: "#deb458",padding: 5,width: 200, borderRadius: 30,alignItems: "center",justifyContent: "center",marginTop: 30,}}>
            <Text style={{textAlign: "center",color: "#fff",fontSize: 18,fontWeight: "bold",}}>Fazer Login</Text>
            
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{ marginTop: 20, color:"#deb458",fontWeight: "bold", }}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <View style={styles.containerbtn}>
                <TouchableOpacity style={styles.btnlogin} title='Login' onPress={ ()=> props.navigation.navigate("Login")}>
                    <Image resizeMode='contain' source={require('../assets/loginicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Fale Conosco' onPress={ ()=> props.navigation.navigate("Faleconosco")}>
                    <Image resizeMode='contain' source={require('../assets/faleconoscoicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Cadastro Escola' onPress={ ()=> props.navigation.navigate("CadastroEscola")}>
                    <Image resizeMode='contain' source={require('../assets/schoolicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Cadastro Doador' onPress={ ()=> props.navigation.navigate("CadastroDoador")}>
                    <Image resizeMode='contain' source={require('../assets/usuarioicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Login Escola' onPress={ ()=> props.navigation.navigate("Escola")}> 
                    <Image resizeMode='contain' source={require('../assets/escolaloginicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Login Doador' onPress={ ()=> props.navigation.navigate("Doador")}>
                    <Image resizeMode='contain' source={require('../assets/doadorloginicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>
            </View>

        </View>
    );
}