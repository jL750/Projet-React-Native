
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import PageA from './screens/PageA';
import PageB from './screens/PageB';
import PageC from './screens/PageC';




const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PageA" component={PageA} />
      <Stack.Screen name="PageB" component={PageB} />
        <Stack.Screen name="PageC" component={PageC} />
    </Stack.Navigator>
  );
}
