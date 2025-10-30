import {Image, Text, View } from "react-native";
import styles from "./styles";

// Composant pour afficher un produit
 const Articles = ({item}) => (

   <View style={styles.articleContainer}>
    <Image source={{ uri: item.image}} style={styles.image}/>
    <View style={styles.info}>
      <Text style={styles.nom}>{item.name}</Text>
      <Text style={styles.prix}>{item.prix}</Text>
    </View>
  </View>
);

export default Articles