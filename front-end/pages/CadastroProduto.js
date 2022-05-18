import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from "react-native";
import api from "../api/api";
import globalStyles from "../global_styles/globalStyles";

const CadastroProduto = () => {

    const [nome, setNome] = useState('')
    const [desc, setDesc] = useState('')
    const [fotos, setFotos] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')

    const send = () => {
    api.request({
        url:"/produtos",
        data:{
          nome,
          desc,
          fotos,
          preco,
          categoria
        },
        method: "POST"
      }).then(() => {
          console.log("fornecedor cadastrado com sucesso!");
        }).catch((err) => {
          console.log(err)
        })
    }
    return (
    <ScrollView> 
      <View style={styles.container}>
          <Text>Produto</Text>
          <TextInput onChangeText={(text) => {setNome(text)}}  style={[globalStyles.input, styles.input]} />
          <Text>Descrição</Text>
          <TextInput onChangeText={(text) => {setDesc(text)}}  style={[globalStyles.input, styles.input]} />
          <Text>Fotos</Text>
          <TextInput onChangeText={(text) => {setFotos(text)}}  style={[globalStyles.input, styles.input]} />
          <Text>Preço</Text>
          <TextInput onChangeText={(text) => {setPreco(text)}} style={[globalStyles.input, styles.input]} />
          <Text>Categoria</Text>
          <TextInput onChangeText={(text) => {setCategoria(text)}} style={[globalStyles.input, styles.input]} />
          <Text></Text>
          <Button title="cadastar" color="red" onPress={() => {send()}}/>
      </View>
    </ScrollView>
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
      width:200
    }
  });
 
export default CadastroProduto;