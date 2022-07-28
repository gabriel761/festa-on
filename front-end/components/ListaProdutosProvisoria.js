import { View, StyleSheet } from "react-native";

const ListaProdutosProvisoria = () => {
    return ( 
        <View style={styles.row}>
            <View style={styles.column}>
                <View style={styles.image}>

                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.image}>

                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.image}>

                </View>
            </View>
        </View>

     );
}

const styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        marginBottom: 15,
        alignSelf: "center"
    },
    column:{
        marginHorizontal: 7
    },
    image:{
        height: 100,
        width:100,
        backgroundColor:"#666666"
    }
})
 
export default ListaProdutosProvisoria;