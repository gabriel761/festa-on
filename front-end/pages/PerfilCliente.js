import { cloneElement, useContext } from "react";
import {View, Text, StyleSheet } from "react-native";
import { UserContext } from "../context/UserContext";
import LogoContainer from "../components/LogoContainer";
import CardNomeFoto from "../components/CardNomeFoto";
import CardPerfil from "../components/CardPerfil";

const PerfilCliente = () => {
    const {user} = useContext(UserContext)
    return ( 
        <View style={styles.container}>
            <LogoContainer/>
            <CardNomeFoto nome={user.nome}/>
            
            <View style={styles.body}>
                <CardPerfil label="E-mail:" data={user.email}/>
                <CardPerfil label="CPF:" data={user.cpf}/>
                <CardPerfil label="Telefone:" data={user.telefone}/>
                <CardPerfil label="Instagram:" data={user.instagram}/>
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    body:{
        marginTop: 20,
        alignItems: "center"
    }
})
export default PerfilCliente;