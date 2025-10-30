
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

const Panier = ({ route }) => {

    //c’est un objet fourni automatiquement par React Navigation à chaque écran.
    //extrait la propriété panier depuis route.params et la stocke dans une variable locale appelée panier.
  const { panier } = route.params;
console.log (panier)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Mon Panier</Text>
      <FlatList
        data={panier}
        keyExtractor={(item, index) => item.id + '-' + index}
        renderItem={({ item }) => (
          <Text style={styles.cartItem}>• {item.name} - {item.prix}</Text>

        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Panier ;
