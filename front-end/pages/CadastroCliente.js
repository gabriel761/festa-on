import api from "../api/api";
import { useState } from "react";
import globalStyles from "../global_styles/globalStyles";
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CadastroCliente = () => {
    
    const [message, setMessage] = useState('') 

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [dataNasc, setDataNasc] = useState('')
    const [cpf, setCpf] = useState('')
    const [tel, setTel] = useState('')
    const [instagram, setInstagram] = useState('')
    const [endereco, setEndereco] = useState('')
    

    const send = () => {
       api.request({
        url:"/addCliente",
        data:{
          nome,
          email,
          senha,
          dataNasc,
          cpf,
          tel,
          instagram,
          endereco
        },
        method: "POST"
      }).then((result) => {
          console.log(result.data)
          setMessage(result.data.message)
        }).catch((err) => {
          console.log(err)
        })
    }

    return ( 
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image  source={require('../assets/images/logo-versao-2-colorido-resized.png')} style={styles.logo}/>
        </View>
        
        <View style={styles.formContainer}>
            <Text style={styles.formHeader}>CADASTRE-SE</Text>
            <TextInput  onChangeText={(text) => {setNome(text)}} style={[ styles.input]}  placeholder="Preencha seu nome completo"/>
            
            <TextInput  onChangeText={(text) => {setEmail(text)}} style={[ styles.input]} placeholder="Preencha seu e-mail"/>
           
            <TextInput  onChangeText={(text) => {setSenha(text)}} style={[ styles.input]} placeholder="Senha"/>
            
            <TextInput  onChangeText={(text) => {setDataNasc(text)}} style={[ styles.input]} placeholder="Data de Nascimento"/>
            
            <TextInput  onChangeText={(text) => {setCpf(text)}} style={[ styles.input]} placeholder="CPF"/>
            
            <TextInput  onChangeText={(text) => {setTel(text)}} style={[ styles.input]} placeholder="Telefone"/>
            
            <TextInput  onChangeText={(text) => {setInstagram(text)}} style={[ styles.input]} placeholder="Instagram"/>
            
            <TextInput  onChangeText={(text) => {setEndereco(text)}} style={[ styles.input]} placeholder="Preencha seu Endereço"/>
            <Text>{message}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {send()}}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
     );
}
 

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:40,
      paddingTop:20,
      marginTop: -120,
      zIndex: 3,
      elevation: 3,
      width: "90%",
      alignSelf: "center",
      elevation: 5,
      marginBottom: 20
    },
    logoContainer:{
      height: 200,
      backgroundColor: "#212121",
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    logo:{
      width: 250,
      height: 42
    },
    input:{
      width:"70%",
      borderBottomWidth:2,
      marginTop: 30,
      fontSize:13,
      borderBottomColor: "#615f6c",
      fontFamily: "poppins-light"
    },
    button:{
      backgroundColor: "#58c2d5",
      width: 140,
      borderRadius: 30,
      height:50,
      justifyContent:"center",
      alignItems:"center",
      shadowOffset: {
        width: 10,
        height: 5,
      },
      shadowOpacity: 0.8,
      shadowRadius: 7,
      elevation: 8,
    },
    buttonText:{
      color: "white",
      textAlign: "center",
      fontSize: 14,
      margin: 0,
      fontFamily: "poppins-bold"
    },
    formHeader:{
      fontFamily: "poppins-bold",
      fontSize:16
    }
  });
export default CadastroCliente;

