import { StyleSheet, Text, View } from "react-native";

const CardPerfil = ({label,data}) => {
    return ( 
        <View style={styles.card}>
            <Text style={styles.labelText}>{label}</Text>
            <Text style={styles.dataText}>{data}</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    card:{
        alignItems: "flex-start",
        justifyContent: "center",
        width: 300,
        height: 70,
        padding: 20,
        marginTop:15,
        elevation: 2,
        backgroundColor:"#fff"
    },
    labelText:{
        alignItems: "flex-start",
        color:"#ccc",
        fontFamily: "poppins-regular"
    },
    dataText:{
        alignItems: "flex-start",
        color:"#7b7b7b",
        fontFamily: "poppins-bold" 
    }
})

export default CardPerfil;