import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomMainDrawer from '../components/CustomMainDrawer';
import CadastroProduto from '../pages/CadastroProduto';
import FornecedoresVip from '../pages/FornecedoresVip';
import PerfilFornecedor from '../pages/PerfilFornecedor';
import FornecedoresVipStack from './FornecedoresVipStack';




const FornecedorDrawer = () => {
    const Drawer = createDrawerNavigator()
    return ( 
        <Drawer.Navigator useLegacyImplementation={true}  drawerContent={(props) => <CustomMainDrawer {...props}/>} >
            <Drawer.Screen name='Fornecedores Vip' component={FornecedoresVipStack}/>
            <Drawer.Screen name='Perfil' component={PerfilFornecedor} />
            <Drawer.Screen name='Cadastrar produto' component={CadastroProduto} />
        </Drawer.Navigator>
     );
}
 
export default FornecedorDrawer;