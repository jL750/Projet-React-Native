import { StatusBar, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonSimple from './Support/button/btSimple';
import ButtonMenu from './TP/Menu/menu';
import Form from './Support/formulaire/form';

export default function App() {
  return (
   /*  Pour tester le ButtonSimple, décommentez ce bloc et commentez le suivant
   
   <SafeAreaView style={{ flex: 1, backgroundColor: '#10c97fff' }}>
      <StatusBar barStyle="light-content" backgroundColor="#b50d0d"/>
      <View style={{ padding: 20 }}>
        <Text style={{ color: '#0e1b0b', fontSize: 18 }}>
          Bonjour ! Votre contenu est bien positionné.
          <ButtonSimple/>

        </Text>
      </View>
    </SafeAreaView> 
    
    */
   
    <SafeAreaView style={{ flex: 1, backgroundColor: '#10c97fff' }}>
      <StatusBar barStyle="light-content" backgroundColor="#b50d0d"/>
      <View style={{ padding: 20 }}>
        <Text style={{ color: '#0e1b0b', fontSize: 18 }}>
          <ButtonMenu/>
          <Form/>
        </Text>
      </View>
    </SafeAreaView>
  );
}
