import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function Inscription() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    motDePasse: '',
    confirmMotDePasse: ''
  });

  const [erreurs, setErreurs] = useState({});

  const handleChange = (champ, valeur) => {
    setFormData(prev => ({
      ...prev,
      [champ]: valeur
    }));
    // Efface l'erreur du champ quand l'utilisateur modifie
    if (erreurs[champ]) {
      setErreurs(prev => ({
        ...prev,
        [champ]: ''
      }));
    }
  };

  const validerFormulaire = () => {
    const nouvellesErreurs = {};

    // Validation du nom
    if (!formData.nom.trim()) {
      nouvellesErreurs.nom = 'Le nom est requis';
    }

    // Validation du prénom
    if (!formData.prenom.trim()) {
      nouvellesErreurs.prenom = 'Le prénom est requis';
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nouvellesErreurs.email = 'L\'email est requis';
    } else if (!emailRegex.test(formData.email)) {
      nouvellesErreurs.email = 'Email invalide';
    }

    // Validation du téléphone
    const telRegex = /^[0-9]{10}$/;
    if (!formData.telephone.trim()) {
      nouvellesErreurs.telephone = 'Le téléphone est requis';
    } else if (!telRegex.test(formData.telephone.replace(/\s/g, ''))) {
      nouvellesErreurs.telephone = 'Téléphone invalide (10 chiffres)';
    }

    // Validation du mot de passe
    if (!formData.motDePasse) {
      nouvellesErreurs.motDePasse = 'Le mot de passe est requis';
    } else if (formData.motDePasse.length < 8) {
      nouvellesErreurs.motDePasse = 'Minimum 8 caractères';
    }

    // Validation de la confirmation
    if (formData.motDePasse !== formData.confirmMotDePasse) {
      nouvellesErreurs.confirmMotDePasse = 'Les mots de passe ne correspondent pas';
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  };

  const handleSubmit = () => {
    if (validerFormulaire()) {
      Alert.alert(
        'Succès', 
        `Bienvenue ${formData.prenom} ${formData.nom}!\n\nVotre compte a été créé avec succès.`,
        [{ text: 'OK' }]
      );
      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        motDePasse: '',
        confirmMotDePasse: ''
      });
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        
        <View style={styles.header}>
          <Text style={styles.titre}>Créer un compte</Text>
          <Text style={styles.sousTitre}>Remplissez le formulaire ci-dessous</Text>
        </View>

        {/* Nom */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Nom *</Text>
          <TextInput
            style={[styles.input, erreurs.nom && styles.inputErreur]}
            value={formData.nom}
            onChangeText={(valeur) => handleChange('nom', valeur)}
            placeholder="Dupont"
            autoCapitalize="words"
          />
          {erreurs.nom && <Text style={styles.texteErreur}>{erreurs.nom}</Text>}
        </View>

        {/* Prénom */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Prénom *</Text>
          <TextInput
            style={[styles.input, erreurs.prenom && styles.inputErreur]}
            value={formData.prenom}
            onChangeText={(valeur) => handleChange('prenom', valeur)}
            placeholder="Jean"
            autoCapitalize="words"
          />
          {erreurs.prenom && <Text style={styles.texteErreur}>{erreurs.prenom}</Text>}
        </View>

        {/* Email */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={[styles.input, erreurs.email && styles.inputErreur]}
            value={formData.email}
            onChangeText={(valeur) => handleChange('email', valeur)}
            placeholder="exemple@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {erreurs.email && <Text style={styles.texteErreur}>{erreurs.email}</Text>}
        </View>

        {/* Téléphone */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Téléphone *</Text>
          <TextInput
            style={[styles.input, erreurs.telephone && styles.inputErreur]}
            value={formData.telephone}
            onChangeText={(valeur) => handleChange('telephone', valeur)}
            placeholder="0612345678"
            keyboardType="phone-pad"
            maxLength={10}
          />
          {erreurs.telephone && <Text style={styles.texteErreur}>{erreurs.telephone}</Text>}
        </View>

        {/* Mot de passe */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Mot de passe *</Text>
          <TextInput
            style={[styles.input, erreurs.motDePasse && styles.inputErreur]}
            value={formData.motDePasse}
            onChangeText={(valeur) => handleChange('motDePasse', valeur)}
            placeholder="••••••••"
            secureTextEntry
            autoCapitalize="none"
          />
          {erreurs.motDePasse && <Text style={styles.texteErreur}>{erreurs.motDePasse}</Text>}
        </View>

        {/* Confirmation mot de passe */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Confirmer le mot de passe *</Text>
          <TextInput
            style={[styles.input, erreurs.confirmMotDePasse && styles.inputErreur]}
            value={formData.confirmMotDePasse}
            onChangeText={(valeur) => handleChange('confirmMotDePasse', valeur)}
            placeholder="••••••••"
            secureTextEntry
            autoCapitalize="none"
          />
          {erreurs.confirmMotDePasse && <Text style={styles.texteErreur}>{erreurs.confirmMotDePasse}</Text>}
        </View>

        {/* Bouton de soumission */}
        <TouchableOpacity 
          style={styles.bouton}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <Text style={styles.texteBouton}>S'inscrire</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.texteFooter}>
            Déjà un compte ? <Text style={styles.lien}>Se connecter</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
    marginTop: 20,
  },
  titre: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sousTitre: {
    fontSize: 16,
    color: '#666',
  },
  champContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  inputErreur: {
    borderColor: '#e74c3c',
    borderWidth: 2,
  },
  texteErreur: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  bouton: {
    backgroundColor: '#3498db',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  texteBouton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  texteFooter: {
    fontSize: 14,
    color: '#666',
  },
  lien: {
    color: '#3498db',
    fontWeight: '600',
  },
});