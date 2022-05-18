import {  useEffect, useState } from "react";
import { View, StyleSheet} from "react-native";
import api from "../api/api";

import ListaFornecedores from "../components/ListaFornecedores";
import PesquisaFornecedores from "../components/PesquisaFornecedores";

const FornecedoresVip = ({navigation}) => {
    
    const [fornecedores, setFornecedores] = useState([])
    
    
   
        useEffect(() => {
            api.request({
                url:'/fornecedores-vip',
                method: 'GET',
            }).then((response) => {
                setFornecedores(response.data)
            }).catch((err) => {
                console.log(err)
            })
        }, [])  
    
    return ( 
        <View style={styles.container}>
            <PesquisaFornecedores setFornecedores={setFornecedores}/>
            <ListaFornecedores fornecedores={fornecedores} navigation={navigation} />
        </View>
        
     );
}


const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-start"
    }
    
})
 
export default FornecedoresVip;