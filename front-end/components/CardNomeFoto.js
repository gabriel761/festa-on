import {View , StyleSheet, Text } from "react-native";
const CardNomeFoto = ({nome}) => {
    return ( 
        <View style={styles.card}>
            <View style={styles.profileImageWrap}>
                <View style={styles.profileImage}>

                </View>
            </View>
            <View style={styles.nameWrap}>
                <Text style={styles.text}>Bem-vindo <Text style={styles.nameBold}>{nome}</Text></Text>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    card:{
        alignItems:"center",
        alignSelf: "center",
        marginHorizontal:20,
        elevation: 10,
        backgroundColor: "#fff",
        height:150,
        width: "80%",
        marginTop:-60
    },
    profileImageWrap:{
        backgroundColor:"#fff",
        height: 120,
        width: 120,
        borderRadius:100,
        marginTop: -65,
        justifyContent:"center",
        alignItems: "center",
        elevation:15
    },
    profileImage:{
        backgroundColor:"#666666",
        height: 100,
        width: 100,
        borderRadius:100,
    },
    nameWrap:{
        flex:1,
        justifyContent:"center",
        height:"100%"
    },
    text:{
        fontFamily: "poppins-regular",
        fontSize:18
    },
    nameBold:{
        fontFamily: "poppins-bold"
    }
    
})
 
export default CardNomeFoto;