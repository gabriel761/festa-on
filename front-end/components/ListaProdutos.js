import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ListaProdutos = ({produtos, navigation}) => {
    return ( 
        <View style={styles.listaProdutos}>
                {produtos.map((produto, key) => {
                    return(
                        <TouchableOpacity style={styles.produto} key={produto.pk_id} onPress={()=>{navigation.navigate("Produtos", {screen: "Produto", params: {id:produto.pk_id}})}} >
                            <Text>{produto.nome_produto}</Text>
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
 
export default ListaProdutos;