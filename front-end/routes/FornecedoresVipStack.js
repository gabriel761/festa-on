import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FornecedoresVip from "../pages/FornecedoresVip";
import FornecedorVip from "../pages/FornecedorVip";





const FornecedoresVipStack = () => {
    const Stack = createNativeStackNavigator()
    return ( 
        <Stack.Navigator>
          <Stack.Screen name="Fornecedores" component={FornecedoresVip} options={{ headerShown: false }}/>
          <Stack.Screen name="Fornecedor" component={FornecedorVip} options={{ title: "" }}/>
        </Stack.Navigator>
     );
}
 
export default FornecedoresVipStack;