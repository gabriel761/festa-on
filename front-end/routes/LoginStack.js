import Login from "../pages/Login";
import CadastroCliente from "../pages/CadastroCliente"
import CadastroProduto from "../pages/CadastroProduto";
import CadastroFornecedor from "../pages/CadastroFornecedor";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClienteDrawer from "./ClienteDrawer";
import FornecedorDrawer from "./FornecedorDrawer";



const LoginStack = () => {
    const Stack = createNativeStackNavigator()
    return ( 
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Cadastro Cliente" component={CadastroCliente} options={{title: '', headerStyle:{backgroundColor:"#212121"}, headerTintColor: "#7a7a7a"}} />
          <Stack.Screen name="Cadastro Produto" component={CadastroProduto}/>
          <Stack.Screen name="Cadastro Fornecedor" component={CadastroFornecedor}/>
          <Stack.Screen name="Cliente Drawer" component={ClienteDrawer} options={{headerShown: false}}/>
          <Stack.Screen name="Fornecedores Drawer" component={FornecedorDrawer} options={{headerShown: false}}/>
        </Stack.Navigator>
     );
}
 
export default LoginStack;