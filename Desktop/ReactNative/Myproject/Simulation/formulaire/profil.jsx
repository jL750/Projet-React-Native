import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

const Profil = ({ route, navigation }) => {
  const { nom, prenom, email, telephone, age } = route.params;

  // Liste des infos pour itération
  const infos = [
    { label: 'Nom', value: nom },
    { label: 'Prénom', value: prenom },
    { label: 'Email', value: email },
    { label: 'Téléphone', value: telephone },
    { label: 'Âge', value: age },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>

      {infos.map((info, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.label}>{info.label}</Text>
          <Text style={styles.value}>{info.value || '-'}</Text>
        </View>
      ))}

      <Pressable
        style={styles.button}
        onPress={() => navigation.goBack('Home')}
      >
        <Text style={styles.buttonText}>Retour à l'accueil</Text>
      </Pressable>

      {/* 🔴 Bouton Déconnexion */}
      <Pressable
        style={styles.logoutButton}
        onPress={() => navigation.replace('Connexion')}
      >
        <Text style={styles.logoutText}>Se Déconnecter</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#E9EFF3',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
    color: '#333',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // pour Android
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 6,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  button: {
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 15,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#FF3B30',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
