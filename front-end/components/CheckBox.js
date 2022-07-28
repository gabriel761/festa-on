import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CheckBox = (props) => {
    const iconName = props.isChecked ? "checkbox-marked": "checkbox-blank-outline"
    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color="#777777" />
            </Pressable>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};
  
export default CheckBox;
  
const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: 250,
        marginTop: 20,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 14,
        color: "#888888",
        marginLeft: 5,
        fontFamily: "poppins-regular"
    },
    
});