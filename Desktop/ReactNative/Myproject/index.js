import { registerRootComponent } from 'expo';
import MyApp from './Support/navigation/MyApp';
import Form from './Support/formulaire/form';
import Composants from './Support/props/composants';
import MyApp2 from './Support/props/MyApp';
import Catalogue from './Support/FlatList/Catalogue';
import MyAppP from './Simulation/MyAppP';
import MyAppP2 from './projet/MyAppP';



/* import App from './App'; */

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(MyAppP);
