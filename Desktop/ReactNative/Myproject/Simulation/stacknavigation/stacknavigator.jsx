import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Connexion from '../formulaire/connexion';
import Inscription from '../formulaire/inscription'; 
import Profil from '../formulaire/profil';
import Catalogue from '../FlatList/Catalogue2';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Inscription" component={Inscription} />
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="Catalogue" component={Catalogue} />
    </Stack.Navigator>
  );
}
