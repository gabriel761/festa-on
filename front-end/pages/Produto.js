import { useContext, useEffect, useState } from "react";
import {View, Text } from "react-native";
import { UserContext } from "../context/UserContext";
import api from "../api/api";

const Produto = ({route}) => {
    const {id} = route.params
    const [produto, setProduto] = useState({})
    console.log(id)
    useEffect(() => {
        api.request({
            url:'/produtos/'+id,
            method: 'GET',
        }).then((response) => {
            setProduto(response.data[0])
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return ( 
        <View>
            <Text>Nome do produto: {produto.nome_produto}</Text>
            <Text>Descrição: {produto.descricao}</Text>
            <Text>Fotos: {produto.fotos}</Text>
            <Text>Preço: {produto.preco}</Text>
            <Text>Categoria: {produto.categoria}</Text>
        </View>
     );
}
 
export default Produto;