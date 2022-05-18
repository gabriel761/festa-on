import { NavigationContainer } from "@react-navigation/native";
import {UserProvider} from "./context/UserContext";
import LoginStack from "./routes/LoginStack";
import * as Font from "expo-font"
import { useState } from "react";
import AppLoading from "expo-app-loading";

const getFonts = ()=>{
  return Font.loadAsync({
    'poppins-regular': require("./assets/fonts/Poppins-Regular.ttf"),
    'poppins-bold': require("./assets/fonts/Poppins-Bold.ttf"),
    'poppins-light': require("./assets/fonts/Poppins-Light.ttf"),
    'poppins-semiBold': require("./assets/fonts/Poppins-SemiBold.ttf"),
    'poppins-medium': require("./assets/fonts/Poppins-Medium.ttf"),
    'poppins-thin': require("./assets/fonts/Poppins-Thin.ttf"),
    'poppins-extraLight': require("./assets/fonts/Poppins-ExtraLight.ttf"),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  if(fontsLoaded){
    return (
      <NavigationContainer>
        <UserProvider>
          <LoginStack/>
        </UserProvider>
      </NavigationContainer>
    );
  }else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)} 
        onError={console.warn}
      />

    );
  }
  
}


