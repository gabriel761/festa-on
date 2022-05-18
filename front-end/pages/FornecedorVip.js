import { useContext, useState, useEffect } from "react";
import {View, Text } from "react-native";
import { UserContext } from "../context/UserContext";
import api from "../api/api";

const FornecedorVip = ({route}) => {
    const {id} = route.params
    const [fornecedor, setFornecedor] = useState({})
    console.log(id)
    useEffect(() => {
        api.request({
            url:'/fornecedores/'+id,
            method: 'GET',
        }).then((response) => {
            setFornecedor(response.data[0])
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return ( 
        <View>
            <Text>Nome da loja: {fornecedor.nome_loja}</Text>
            <Text>E-mail: {fornecedor.email}</Text>
            <Text>Endereço: {fornecedor.endereco}</Text>
            <Text>CNPJ: {fornecedor.cnpj}</Text>
            <Text>Telefone: {fornecedor.telefone}</Text>
            <Text>Instagram: {fornecedor.instagram}</Text>
        </View>
     );
}
 
export default FornecedorVip;