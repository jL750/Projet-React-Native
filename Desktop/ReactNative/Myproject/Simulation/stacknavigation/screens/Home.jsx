import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

const  Home=({ navigation })=> {
  return (
    <View style={styles.container}>
  
      {/* Menu horizontal en haut */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menu}
        style={styles.menuWrapper}
      >
        <Pressable style={styles.button} onPress={() => navigation.navigate('Inscription')}>
          <Text style={styles.buttonText}>Inscription</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Connexion')}>
          <Text style={styles.buttonText}>Connexion</Text>
        </Pressable>

         <Pressable style={styles.button} onPress={() => navigation.navigate('Connexion')}>
          <Text style={styles.buttonText}>Profil</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Catalogue')}>
          <Text style={styles.buttonText}>Catalogue</Text>
        </Pressable>
       
      </ScrollView>
  
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuWrapper: {
    paddingTop: 30,
    maxHeight: 80,
  },
//   menu: {
//     paddingHorizontal: 10,
//     alignItems: 'center',
//   },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
