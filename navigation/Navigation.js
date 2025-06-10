import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Pokemons from './Pokemons';
import Favoritos from './Favoritos';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="PokeDex"
                component={Pokemons}
                options={{
                    tabBarLabel: "PokeDex",
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="catching-pokemon"
                            size={24}
                            color="#f00000"
                        />
                    ),
                    headerTitleAlign: 'center',
                    title: 'PokeDex',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 35,
                        color: '#f00000',
                    },
                    // tabBarBadge: 0,
                }}
            />

            <Tab.Screen
                name="Favoritos"
                component={Favoritos}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="heart"
                            size={24}
                            color="#f00000"
                        />
                    ),
                    headerTitleAlign: 'center',
                    title: 'Favoritos',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 35,
                        color: '#f00000',
                    },
                    // tabBarBadge: 0, // PARA CONTAR LOS FAVORITOS
                }}
            />

        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
};

export default Navigation;
