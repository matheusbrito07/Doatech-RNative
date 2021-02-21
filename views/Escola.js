import React from 'react';
import {styles} from './Css';
import { Text, View, TextInput, Button,Image,TouchableOpacity, ScrollView  } from 'react-native';

export default function Escola(props)
{

  
    return(
        <View style={styles.container}>
            <Image source={require('../assets/doatech.png')} style={styles.logo}/>
            
            <TouchableOpacity>
                <Text style={{ marginTop: 1, fontSize:25, color:'#deb458',fontWeight: "bold", }}>Algumas dicas...</Text>
            </TouchableOpacity>
                <Text style={{ marginTop: 1, fontSize:15, color:'black',fontWeight: "bold",textAlign:'center', }}>
                    Certifique-se de que o aluno realmente necessita do item solicitado.
                    Os pedidos são atendidos de acordo com a disponibilidade dos doadores. 
                    Confira erros de digitação antes de clicar em "Enviar".
                </Text>
            <TouchableOpacity>
                <Text style={{ marginTop: 1, fontSize:25, color:'#deb458',fontWeight: "bold", }}>Qual o pedido do aluno?</Text>
            </TouchableOpacity>

            <TextInput style={styles.input} placeholder="Escreva aqui o pedido do estudante" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Escreva aqui o nome da que receberá o pedido" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Escreva aqui o endereço da escola" onChangeText={text=>setNome(text)}/>

            <TouchableOpacity style={{backgroundColor: "#deb458",padding: 5,width: 200, borderRadius: 30,alignItems: "center",justifyContent: "center",marginTop: 30,}}>
                <Text style={{textAlign: "center",color: "#fff",fontSize: 18,fontWeight: "bold",}}>Enviar</Text>
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