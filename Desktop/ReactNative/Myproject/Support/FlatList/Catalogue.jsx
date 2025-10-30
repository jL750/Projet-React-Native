import { SafeAreaView} from 'react-native-safe-area-context';
import {Text, FlatList} from 'react-native';
import styles from './styles';
import { produits } from './composants/Data';
import Articles from './Article';
import { View } from 'react-native';



 

// Écran principal
const Catalogue = () => {
const ItemSeparator = () => <View style={styles.separator} />;


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Liste des Produits</Text>
      <FlatList
        data={produits}
        keyExtractor={(item) => item.id}
        renderItem={Articles}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default Catalogue ;
