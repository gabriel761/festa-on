import { View, Image, StyleSheet } from 'react-native'
const LogoContainer = () => {
    return ( 
        <View style={styles.logoContainer}>
          <Image  source={require('../assets/images/logo-versao-2-colorido-resized.png')} style={styles.logo}/>
        </View>
     );
}
 
const styles = StyleSheet.create({
    logoContainer:{
        height: 200,
        backgroundColor: "#212121",
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      logo:{
        width: 250,
        height: 42
      },
})

export default LogoContainer;