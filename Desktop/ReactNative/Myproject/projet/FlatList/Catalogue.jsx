import { SafeAreaView} from 'react-native-safe-area-context';
import {Text, FlatList} from 'react-native';
import styles from './styles';
import { produits } from './composants/Data';
import Articles from './Article';
import { View } from 'react-native';
import { useState } from 'react';



 

// Écran principal
const Catalogue = () => {
  const [panier, setPanier] = useState([]);

  const ajouterAuPanier = (produit) => {
    setPanier((prev) => [...prev, produit]);
  };

const ItemSeparator = () => <View style={styles.separator} />;


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Liste des Produits</Text>
      <FlatList
        //obligatoire
        data={produits}
        //parcours avec les id
        keyExtractor={(item) => item.id}
        // compte rendu de chaque élément
        renderItem={({ item }) => (
          <Articles item={item} onAddCart={() => ajouterAuPanier(item)} />
        )}
        /* renderItem={Articles}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.list} */
      />
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>🛒 Panier : {panier.length} article{panier.length > 1 ? "s" : ""} </Text>
      </View>
    </SafeAreaView>
  );
};

export default Catalogue ;
