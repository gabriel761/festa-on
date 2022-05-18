import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ListaFornecedores = ({fornecedores, navigation}) => {
    console.log(fornecedores)
    return ( 
        <View style={styles.listaProdutos}>
                {fornecedores.map((fornecedor, key) => {
                    return(
                        <TouchableOpacity style={styles.produto} key={fornecedor.pk_id} onPress={()=>{navigation.navigate("Fornecedores Vip", {screen: "Fornecedor", params: {id:fornecedor.pk_id}})}} >
                            <Text>{fornecedor.nome_loja}</Text>
                        </TouchableOpacity>
                    )
                })}
        </View>
     );
}

const styles = StyleSheet.create({
    produto:{
        justifyContent:"space-between",
        padding:10,
        borderWidth:1,
        margin: 15
    },
    listaProdutos:{
       justifyContent: "flex-start"
    }
})
 
export default ListaFornecedores;