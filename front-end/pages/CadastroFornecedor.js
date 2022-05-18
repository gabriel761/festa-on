import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import api from "../api/api";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
    <View style={styles.container}>
        <Text>Nome do proprietário</Text>
        <TextInput onChangeText={(text) => {setNome(text)}}  style={styles.input} />
        <Text>Senha</Text>
        <TextInput onChangeText={(text) => {setSenha(text)}}  style={styles.input} />
        <Text>E-mail</Text>
        <TextInput onChangeText={(text) => {setEmail(text)}}  style={styles.input} />
        <Text>Nome da loja</Text>
        <TextInput onChangeText={(text) => {setNomeLoja(text)}}  style={styles.input} />
        <Text>CNPJ</Text>
        <TextInput onChangeText={(text) => {setCnpj(text)}}  style={styles.input} />
        <Text>Telefone</Text>
        <TextInput onChangeText={(text) => {setTel(text)}} style={styles.input} />
        <Text>Instagram</Text>
        <TextInput onChangeText={(text) => {setInstagram(text)}} style={styles.input} />
        <Text>Endereço</Text>
        <TextInput onChangeText={(text) => {setEndereco(text)}} style={styles.input}/>
        <BouncyCheckbox size={25}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Fornecedor de insumos"
        iconStyle={{ borderColor: "blue" }}
        textStyle="none"
        onPress={(isChecked) => {console.log(isChecked) 
        setVip(isChecked)}} />
        <Text>{message}</Text>
        <Button title="cadastar" color="blue" onPress={() => {send()}}/>
        
    </View>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      borderWidth: 1,
      width:200,
      marginTop:10,
      marginBottom:10
    }
  });
 
export default CadastroFornecedor;