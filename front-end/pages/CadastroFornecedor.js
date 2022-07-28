import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import api from "../api/api";
import { ScrollView } from "react-native-gesture-handler";
import CheckBox from "../components/CheckBox";

const CadastroFornecedor = () => {

    const [message, setMessage] = useState('')
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nomeLoja, setNomeLoja] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [tel, setTel] = useState('')
    const [instagram, setInstagram] = useState('')
    const [endereco, setEndereco] = useState('')
    const [vip, setVip] = useState(false)

    const send = () => {
    api.request({
        url:"/addFornecedor",
        data:{
          nome,
          senha,
          nomeLoja,
          email,
          cnpj,
          tel,
          instagram,
          endereco,
          vip
        },
        method: "POST"
      }).then((result) => {
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
          <TextInput onChangeText={(text) => {setNome(text)}}  style={styles.input} placeholder="Preencha seu nome completo"/>
          <TextInput onChangeText={(text) => {setSenha(text)}}  style={styles.input} placeholder="Preencha seu e-mail"/>
          <TextInput onChangeText={(text) => {setEmail(text)}}  style={styles.input} placeholder="senha"/>
          <TextInput onChangeText={(text) => {setNomeLoja(text)}}  style={styles.input} placeholder="Nome Fantasia/Comercial"/>
          <TextInput onChangeText={(text) => {setCnpj(text)}}  style={styles.input} placeholder="CNPJ"/>
          <TextInput onChangeText={(text) => {setTel(text)}} style={styles.input} placeholder="WhatsApp"/>
          <TextInput onChangeText={(text) => {setInstagram(text)}} style={styles.input} placeholder="Instagram"/>
          <TextInput onChangeText={(text) => {setEndereco(text)}} style={styles.input}placeholder="Preencha seu endereço"/>
          <CheckBox onPress={() => setVip(!vip)} title="Fornecedor Vip" isChecked={vip}/>
          <Text style={styles.message}>{message}</Text>
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
    },
    
    message:{
      marginVertical: 10
    }
  });
 
export default CadastroFornecedor;