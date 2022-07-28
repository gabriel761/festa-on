import {  useEffect, useState, useContext } from "react";
import { View, StyleSheet} from "react-native";
import api from "../api/api";
import CardNomeFoto from "../components/CardNomeFoto";
import ListaProdutos from "../components/ListaProdutos";
import ListaProdutosProvisoria from "../components/ListaProdutosProvisoria";
import LogoContainer from "../components/LogoContainer";
import PesquisaProdutos from "../components/PesquisaProdutos";
import { UserContext } from "../context/UserContext";


const Produtos = ({navigation}) => {
    const [produtos, setProdutos] = useState([])
    const {user} = useContext(UserContext)
    
   
        useEffect(() => {
            api.request({
                url:'/produtos',
                method: 'GET',
            }).then((response) => {
                setProdutos(response.data)
            }).catch((err) => {
                console.log(err)
            })
        }, [])
    
    return ( 
        <View style={styles.container}>
            <LogoContainer/>
            <CardNomeFoto nome={user.nome}/>
            <PesquisaProdutos setProdutos={setProdutos}/>
            <ListaProdutosProvisoria/>
            <ListaProdutosProvisoria/>
            <ListaProdutosProvisoria/>
            {/*<ListaProdutos produtos={produtos} navigation={navigation}/>*/}
        </View>
        
     );
}


const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-start"
    }
    
})
 
export default Produtos;