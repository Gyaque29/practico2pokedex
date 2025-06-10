import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import  Home from './Home' ;
import Settings from './Settings' ;

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen                
                name="PokéDex"
                component={Home}
                options={{
                    tabBarLabel: "Pokemons",
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="account"
                            size={24}
                            color="red"
                        />
                    ),
                   // tabBarBadge: 0,
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={Settings} 
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="account"
                            size={24}
                            color="red"
                        />
                    ),
                   // tabBarBadge: 0,
                }}
            />
    
        </Tab.Navigator>
    )
}

const Navigation = () => {
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
};

export default Navigation;
