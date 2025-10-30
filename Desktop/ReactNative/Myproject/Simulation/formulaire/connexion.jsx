import { View, TextInput, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useState } from 'react';
import styles from './styles/styles.js';

const ConnexionForm = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [erreurs, setErreurs] = useState({});

  const handleChange = (champ, valeur) => {
    setFormData(prev => ({ ...prev, [champ]: valeur }));
    if (erreurs[champ]) setErreurs(prev => ({ ...prev, [champ]: '' }));
  };

  const handleSubmit = () => {
  const nouvellesErreurs = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

  // Vérifie que tous les champs sont remplis
  if (!formData.email.trim() || !formData.password.trim()) {
    Alert.alert('Erreur', 'Veuillez saisir tous les champs', [{ text: 'OK' }]);
    return;
  }

  if (!emailRegex.test(formData.email)) nouvellesErreurs.email = "Email invalide";
  
  
  // Vérification complexe du mot de passe
    if (!regexPassword.test(formData.password)) {
      nouvellesErreurs.password =
        "Le mot de passe doit contenir au moins 12 caractères, une majuscule, un chiffre et un caractère spécial.";
    }

  setErreurs(nouvellesErreurs);

  // Si pas d'erreurs, affiche l'alerte et navigue vers Profil
  if (Object.keys(nouvellesErreurs).length === 0) {
    Alert.alert(
      'Succès',
      'Connexion réussie !',
      [
        { 
          text: 'OK', 
          onPress: () => {
            // Redirection vers la page Profil avec les infos
            navigation.replace('Profil', {
              nom: formData.nom || '',
              prenom: formData.prenom || '',
              email: formData.email,
              telephone: formData.telephone || '',
              age: formData.age || '',
            });

            // Réinitialisation du formulaire
            setFormData({ email: '', password: '', nom: '', prenom: '', telephone: '', age: '' });
          }
        }
      ]
    );
  }
};


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* EMAIL */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Email :</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            value={formData.email}
            onChangeText={val => handleChange('email', val)}
            placeholder="Entrez votre email"
          />
          {erreurs.email && <Text style={{ color: 'red' }}>{erreurs.email}</Text>}
        </View>

        {/* MOT DE PASSE */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Mot de passe :</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={formData.password}
            onChangeText={val => handleChange('password', val)}
            placeholder="Entrez votre mot de passe"
          />
          {erreurs.password && <Text style={{ color: 'red' }}>{erreurs.password}</Text>}
        </View>

        {/* BOUTON CONNEXION */}
        <TouchableOpacity style={styles.bouton} onPress={handleSubmit}>
          <Text style={styles.texteBouton}>Se Connecter</Text>
        </TouchableOpacity>

        {/* BOUTON S'INSCRIRE */}
        <TouchableOpacity
          style={[styles.bouton, { backgroundColor: '#34C759', marginTop: 15 }]}
          onPress={() => navigation.replace('Inscription')} // ← Redirection vers le formulaire Inscription
        >
          <Text style={styles.texteBouton}>S'inscrire</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConnexionForm;
