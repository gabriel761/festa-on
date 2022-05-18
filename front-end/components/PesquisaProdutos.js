import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";
import globalStyles from "../global_styles/globalStyles";
import api from "../api/api"
import { useState } from "react";


const PesquisaProdutos = ({setProdutos}) => {
    const [barraPesq, setBarraPesq] = useState('')
    
    const pressHandle = (pesquisa) => {
        api.request({
            url: "pesquisarProdutos",
            method: "POST",
            data:{
                pesquisa
            }
        }).then((result)=> {
            setProdutos(result.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return ( 
        <View style={styles.wrap}>
            <TextInput style={[globalStyles.input, styles.input]} onChangeText={(value)=>setBarraPesq(value)}/>
            <TouchableOpacity style={styles.button} onPress={()=>pressHandle(barraPesq)}>
                <Text style={styles.buttonText}>Pesquisar</Text>
            </TouchableOpacity>
           
        </View>
     );
}
 

const styles = StyleSheet.create({
    wrap:{
        flexDirection:"row",
        margin: 20
    },
    input:{
        flex:3,
        marginRight:10,
        backgroundColor:"white"
    },
    button:{
        flex:1,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        marginBottom:10,
    },
    buttonText:{
        color:"white"
    }
})

export default PesquisaProdutos;