import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container:{
      width:'300',
      height:'100%',
      flex: 1,
      backgroundColor: '#03999e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width:'100%',
      height:'20%',
      borderRadius:20,
      marginTop:1,
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
    
    },
    input:{
      width:'100%',
      color:'white',
      padding:5,
      marginBottom:5,
      marginTop: 5,
      borderBottomColor: "#ddd",
      borderBottomWidth: 2,
      paddingBottom: 10,
      fontWeight: "bold",
      
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
    containerbtn:{
      flexDirection:'row',
      width:'100%',
      alignSelf:'flex-end',
      borderTopWidth:3,
      borderBottomWidth:1,
      borderColor:'#333',
      position: 'fixed',
      bottom:0,
      backgroundColor:'#03999e',
      justifyContent:'center',
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
      backgroundColor:'#03999e',
    },
    iconlogin:{
      height:40,
      width:40,
    },
  });

  export {styles};