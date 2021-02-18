import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#03999e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width:'100%',
      height:'20%',
      borderRadius:20
    },
    input:{
      width:'100%',
      height:40,
      backgroundColor:'#fff',
      borderRadius:50,
      padding:10,
      marginBottom:10
    },
    btnCadastro:{
      width:100,
      height:40,
      backgroundColor:'#fff',
      borderRadius:50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:10
    },
    textao:{
      
      backgroundColor:'#fff',
      textAlign:'center',
      marginBottom:30
    }, 
    textao2:{
      backgroundColor:'steelblue',
      fontSize:50,
      textAlign:'center',
      marginBottom:15,
      color:'#fff'
    },
    textao3:{
      backgroundColor:'steelblue',
      fontSize:20,
      textAlign:'center',
      marginBottom:15,
      color:'#fff'
    },
    btnLogar:{
      fontSize:10,
    },
    containerbtn:{
      flexDirection:'row',
      width:'100%',
      alignSelf:'flex-end',
      borderTopWidth:2,
      borderBottomWidth:2,
      borderColor:'#333',
    },
    btnMenu:{
      marginHorizontal:10,
    },
    btnlogin:{
      height:50,
      width:50,
      justifyContent:'center',
      alignItems:'center',
      borderRightWidth:2,
      borderColor:'#333',
      backgroundColor:'#fff',
    },
    iconlogin:{
      height:40,
      width:40,
    },
  });

  export {styles};