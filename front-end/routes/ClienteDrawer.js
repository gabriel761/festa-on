import { createDrawerNavigator } from '@react-navigation/drawer';
import Produtos from '../pages/Produtos';
import CustomMainDrawer from '../components/CustomMainDrawer';
import PerfilCliente from '../pages/PerfilCliente';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProdutosStack from './ProdutosStack'




const ClienteDrawer = () => {
    const Drawer = createDrawerNavigator()
    const Stack = createNativeStackNavigator()
    return ( 
        <Drawer.Navigator useLegacyImplementation={true}  drawerContent={(props) => <CustomMainDrawer {...props}/>} >
            <Drawer.Screen name='Produtos' component={ProdutosStack} options={{headerTitle: "" ,headerStyle:{backgroundColor:"#212121"}, headerTintColor: "#7a7a7a", headerShadowVisible: false}}/>
            <Drawer.Screen name='Perfil' component={PerfilCliente} options={{headerTitle: "" ,headerStyle:{backgroundColor:"#212121"}, headerTintColor: "#7a7a7a", headerShadowVisible: false}}/>
        </Drawer.Navigator>
     );
}
 
export default ClienteDrawer;