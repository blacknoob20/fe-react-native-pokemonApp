import { createStackNavigator } from '@react-navigation/stack';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { RootStackParams } from './Navigator';

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {

            }
        }}
        >
            <Tab2.Screen name='SearchScreen' component={SearchScreen} />
            <Tab2.Screen name='PokemonScreen' component={PokemonScreen} />
            {/* <Tab2.Screen name='Profile' component={Profile} /> */}
            {/* <Tab2.Screen name='Settings' component={Settings} /> */}
        </Tab2.Navigator>
  )
}
