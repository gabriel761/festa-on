import { cloneElement, useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import api from '../api/api';
import globalStyles from '../global_styles/globalStyles';
import {UserContext} from '../context/UserContext';

const Login = ({navigation}) => {

    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const {user, setUser} = useContext(UserContext)

    const [message, setMessage] = useState('')
    const loginCliente = () => {
      api.request({
        url:'login-cliente',
        method: 'POST',
        data:{
          email,
          senha
        }
      }).then((response) => {
        if (response.data.length == 0) {
          setMessage('login ou senha incorreta')
        }else{
          console.log(response.data)
          setUser(response.data[0])
          navigation.navigate("Cliente Drawer", {screen: 'Produtos'})
          setMessage('')
        }
      }).catch((err) => {
        console.log(err);
      })
    }
    const loginFornecedor = () => {
      api.request({
        url:'login-fornecedor',
        method: 'POST',
        data:{
          email,
          senha
        }
      }).then((response) => {
        if (response.data.length == 0) {
          setMessage('login ou senha incorreta')
        }else{
          console.log(response.data)
          setUser(response.data[0])
         navigation.navigate("Fornecedores Drawer", {screen: 'Fornecedores Vip'})
          setMessage("")
        }
      }).catch((err) => {
        console.log(err);
      })
    }

    return ( 
    <ScrollView contentContainerStyle={styles.container}>
    
      <StatusBar barStyle='light-content' backgroundColor="#212121"/>
      <View style={styles.imageWrap}>
        <Image source={require('../assets/images/logo-versao-2-colorido-resized.png')} style={styles.image}/>
      </View>
      
      <View style={styles.loginWrap}>
        <TextInput onChangeText={(text) => {setEmail(text)}} style={[globalStyles.input, styles.input]} placeholder="E-mail" placeholderTextColor="#c0c0c0"/>
        <TextInput onChangeText={(text) => {setSenha(text)}} style={[globalStyles.input, styles.input]} placeholder="Senha" placeholderTextColor="#c0c0c0"/>
        <Text>{message}</Text>
        <TouchableOpacity style={styles.button} onPress={() => {loginCliente()}}><Text style={styles.buttonText}>LOGIN</Text></TouchableOpacity>
      </View>
      
      <View style={styles.entrarWrap}>
        <TouchableOpacity style={[styles.button,styles.buttonPink]} onPress={() => {loginCliente()}}>
          <Text style={styles.buttonText}>ENTRAR</Text>
          <Text style={styles.buttonTextSm}>sem login</Text>
        </TouchableOpacity>
      </View>
      
        <View style={styles.cadastroWrap}>
          <View style={styles.cadastroRect}>
            <TouchableOpacity style={styles.touchableText} onPress={() => {navigation.navigate('Cadastro Cliente')}}><Text style={styles.textCadastroBold}>Cliente<Text style={styles.textCadastroNormal}> - cadastre-se  ></Text></Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchableText} onPress={() => {navigation.navigate('Cadastro Fornecedor')}}><Text style={styles.textCadastroBold}>Fornecedor<Text style={styles.textCadastroNormal}> - cadastre-se  ></Text></Text></TouchableOpacity>
          </View>
        </View>
    
    </ScrollView>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 4,
      backgroundColor: '#212121',
      color: '#ffffff',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 720
    },
    input: {
      width: 270,
      textAlign: 'center',
      color: "white",
      borderColor: "#398f9e",
      paddingVertical:12,
      fontSize: 16,
      fontFamily: "poppins-regular"
    },
    button:{
      backgroundColor: "#58c2d5",
      width: 140,
      borderRadius: 30,
      height:50,
      justifyContent:"center",
      shadowColor: "#58c2d5",
      shadowOffset: {
        width: 10,
        height: 5,
      },
      shadowOpacity: 0.8,
      shadowRadius: 7,
      elevation: 8,
    },
    buttonPink:{
      backgroundColor:'#be1187',
      shadowColor: "#fc47c3"
    },
    buttonText:{
      color: "white",
      textAlign: "center",
      fontSize: 14,
      margin: 0,
      fontFamily: "poppins-bold"
    },
    buttonTextSm:{
      color: "white",
      textAlign: "center",
      fontSize: 12,
      margin: 0,
      fontFamily: "poppins-semiBold"
    },
    loginWrap:{
      flex:1,
      justifyContent:'center',
      alignItems:"center"
    },
    
    image:{
      width: 300,
      height: 51
    },
    imageWrap:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    entrarWrap:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    cadastroWrap:{
      flex: 1,
      
    },
    cadastroRect:{
      backgroundColor: '#262626',
      paddingHorizontal: 35,
      paddingVertical:20,
      shadowColor: "#5b5967",
      borderRadius: 15,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },
    touchableText:{
      paddingBottom: 5,
      borderBottomColor: "#5b5967",
      borderBottomWidth: 1,
      marginVertical: 7
    },  
    textCadastroBold:{
      color:'white',
      fontSize: 18,
      fontFamily: "poppins-bold",
      
    },
    textCadastroNormal:{
      color:'white',
      fontWeight:"100",
      fontSize: 16,
      fontFamily:"poppins-regular",
      
    }
  });
 
export default Login;