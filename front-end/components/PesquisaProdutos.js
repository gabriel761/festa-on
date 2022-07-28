import { StyleSheet, View, TextInput, TouchableOpacity, Image } from "react-native";
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
            <TextInput style={[ styles.input]} onChangeText={(value)=>setBarraPesq(value)}/>
            <TouchableOpacity style={styles.button} onPress={()=>pressHandle(barraPesq)}>
                <Image style={styles.lupa} source={require("../assets/images/lupa_icon.png")}/>
            </TouchableOpacity>
        </View>
     );
}
 

const styles = StyleSheet.create({
    wrap:{
        flexDirection:"row",
        height: 40,
        marginVertical: 30,
        alignSelf:"center",
        width:'82%',
        borderWidth: 1,
        backgroundColor: "#fff"
    },
    input:{
        flex:1,
        backgroundColor:"white",
        borderWidth: 0,
        margin: 0,
        fontSize: 18,
        color: "#212121",
        paddingVertical: 0,
        paddingHorizontal: 10
    },
    button:{
        width:40,
       justifyContent: "center",
       alignItems: "flex-end",
       borderWidth:0
    },
    lupa:{
        height: 20,
        width: 20,
        marginRight: 10,
        borderWidth:0
    }
})

export default PesquisaProdutos;