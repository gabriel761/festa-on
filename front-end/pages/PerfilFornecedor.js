import { useContext } from "react";
import {View, Text } from "react-native";
import { UserContext } from "../context/UserContext";

const PerfilFornecedor = () => {
    const {user} = useContext(UserContext)
    return ( 
        <View>
            <Text>Nome da loja: {user.nome_loja}</Text>
            <Text>E-mail: {user.email}</Text>
            <Text>Endereço: {user.endereco}</Text>
            <Text>CNPJ: {user.cnpj}</Text>
            <Text>Telefone: {user.telefone}</Text>
            <Text>Instagram: {user.instagram}</Text>
        </View>
     );
}
 
export default PerfilFornecedor;