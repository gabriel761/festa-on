import {  useEffect, useState } from "react";
import { View, StyleSheet} from "react-native";
import api from "../api/api";
import ListaProdutos from "../components/ListaProdutos";
import PesquisaProdutos from "../components/PesquisaProdutos";


const Produtos = ({navigation}) => {
    const [produtos, setProdutos] = useState([])
    
    
   
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
            <PesquisaProdutos setProdutos={setProdutos}/>
            <ListaProdutos produtos={produtos} navigation={navigation}/>
        </View>
        
     );
}


const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-start"
    }
    
})
 
export default Produtos;