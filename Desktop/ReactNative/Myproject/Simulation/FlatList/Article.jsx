import {Image, Text, View, Pressable } from "react-native";
import styles from "./styles";

// Composant pour afficher un produit
 const Articles = ({item: article, onAddToCart}) => (

   <View style={styles.articleContainer}>
    <Image source={{ uri: article.image}} style={styles.image}/>
    <View style={styles.info}>
      <Text style={styles.nom}>{article.name}</Text>
      <Text style={styles.prix}>{article.prix}</Text>
      <Pressable onPress={/* () => alert(`Vous avez sélectionné ${article.name}`) */onAddToCart}>
        <Text style={styles.button}>Ajouter au Panier</Text>
      </Pressable> 
    </View>
  </View>
);

export default Articles