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
        <Pressable style={styles.button} onPress={() => navigation.navigate('PageA')}>
          <Text style={styles.buttonText}>navigate → PageA</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.push('PageA')}>
          <Text style={styles.buttonText}>push → PageA</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('PageB')}>
          <Text style={styles.buttonText}>navigate → PageB</Text>
        </Pressable>

       
        <Pressable style={styles.button} onPress={() => navigation.replace('PageB')}>
          <Text style={styles.buttonText}>replace → PageB</Text>
        </Pressable>
         <Pressable style={styles.button} onPress={() => navigation.navigate('PageC')}>
          <Text style={styles.buttonText}>navigate → PageC</Text>
        </Pressable>
      </ScrollView>
  {/* Contenu principal */}
      <View style={styles.content}>
        <Text style={styles.title}>🏠 Accueil</Text>
      </View>
  
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
