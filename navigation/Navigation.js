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
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="account"
                            size={24}
                            color="gray"
                        />
                    ),
                    tabBarBadge: 32,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings} 
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
