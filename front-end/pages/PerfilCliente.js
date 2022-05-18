import { useContext } from "react";
import {View, Text } from "react-native";
import { UserContext } from "../context/UserContext";

const PerfilCliente = () => {
    const {user} = useContext(UserContext)
    return ( 
        <View>
            <Text>Nome: {user.nome}</Text>
            <Text>E-mail: {user.email}</Text>
            <Text>Data de nascimento: {user.data_nascimento}</Text>
            <Text>Cpf: {user.cpf}</Text>
            <Text>Telefone: {user.telefone}</Text>
            <Text>Instagram: {user.instagram}</Text>
        </View>
     );
}
 
export default PerfilCliente;