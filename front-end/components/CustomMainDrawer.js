import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const CustomMainDrawer = (props) => {
    const {setUser} = useContext(UserContext)

    const logOut = () => {
        setUser(null)
        props.navigation.navigate("Login")
    }
    return ( 
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem label="Log out" onPress={() => logOut()}/>
        </DrawerContentScrollView>
     );
}
 
export default CustomMainDrawer;