import React from 'react';
import {styles} from './Css';
import { Text, View, TextInput, Button,Image,TouchableOpacity,ScrollView  } from 'react-native';

export default function Home(props)
{

  
    return(
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.textao} >DoaTech é uma plataforma totalmente gratuita. 
        Nosso principal propósito é levar tecnologia para aqueles que precisam.
        Criamos uma ponte entre doadores e alunos da rede pública que necessitam de aparelhos tecnológicos para os estudos em domicílio
        
        Tem um computador ou tablet parado na sua casa? Doe para quem precisa!
        
        Seus alunos não tem a tecnologia necessária para os estudos? Faça parte do projeto e se cadastre em nossa plataforma!</Text>
        </ScrollView>
            <Text style={styles.textao2}>Quer saber como funciona?</Text>
            <Text style={styles.textao3}>Continue lendo...</Text>
            
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