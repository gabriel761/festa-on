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
            <Drawer.Screen name='Produtos' component={ProdutosStack}/>
            <Drawer.Screen name='Perfil' component={PerfilCliente} />
        </Drawer.Navigator>
     );
}
 
export default ClienteDrawer;