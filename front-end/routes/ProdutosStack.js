
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produto from "../pages/Produto";
import Produtos from "../pages/Produtos";




const ProdutosStack = () => {
    const Stack = createNativeStackNavigator()
    return ( 
        <Stack.Navigator>
          <Stack.Screen name="Produtos stacked" component={Produtos} options={{ headerShown: false }}/>
          <Stack.Screen name="Produto" component={Produto} options={{ title: "" }}/>
        </Stack.Navigator>
     );
}
 
export default ProdutosStack;