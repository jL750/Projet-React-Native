import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

const  Home=({ navigation })=> {
  return (
    <View style={styles.container}>
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

    <Pressable style={styles.button} onPress={() => navigation.navigate('Profil')}>
      <Text style={styles.buttonText}>Profil</Text>
    </Pressable>

    <Pressable style={styles.button} onPress={() => navigation.navigate('Catalogue')}>
      <Text style={styles.buttonText}>Catalogue</Text>
    </Pressable>
  </ScrollView>

  <View style={styles.content}>
    <Text style={styles.title}>Bienvenue sur notre application 🚀</Text>
    <Text style={styles.subtitle}>
      Explorez le catalogue, créez un compte et découvrez nos services !
    </Text>
  </View>
</View>

  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // gris clair doux
  },
  menuWrapper: {
    paddingTop: 30,
    maxHeight: 80,
  },
  menu: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginHorizontal: 6,
    marginVertical: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 22,
  },
});
