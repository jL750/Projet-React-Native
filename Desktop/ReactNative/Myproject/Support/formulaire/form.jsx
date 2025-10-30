import { TextInput, View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Alert} from "react-native";
import styles from "./styles/styles.js";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    age: "",
    password: "",
    confirmPassword: "",
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


  const handleSubmit = () => {
    const nouvellesErreurs = {};

    // Nom & Prénom (lettres uniquement)
    if (!formData.nom.trim()) {
      nouvellesErreurs.nom = "Le nom est requis";
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(formData.nom)) {
      nouvellesErreurs.nom = "Seulement des lettres";
    }

    if (!formData.prenom.trim()) {
      nouvellesErreurs.prenom = "Le prénom est requis";
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(formData.prenom)) {
      nouvellesErreurs.prenom = "Seulement des lettres";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nouvellesErreurs.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      nouvellesErreurs.email = "Email invalide";
    }

    // Téléphone
    const telRegex = /^[0-9]{10}$/;
    if (!formData.telephone.trim()) {
      nouvellesErreurs.telephone = 'Le téléphone est requis';
    } else if (!telRegex.test(formData.telephone.replace(/\s/g, ''))) {
      nouvellesErreurs.telephone = 'Téléphone invalide (10 chiffres)';
    }

    // Age
    if (!formData.age.trim()) {
      nouvellesErreurs.age = "L'âge est requis";
    } else if (!/^\d+$/.test(formData.age) || parseInt(formData.age) <= 0) {
      nouvellesErreurs.age = "Age invalide";
    }

    // Mot de passe
    if (!formData.password.trim()) {
      nouvellesErreurs.password = "Le mot de passe est requis";
    } else if (formData.password.length < 12) {
      nouvellesErreurs.password = "Minimum 12 caractères";
    }

    // Confirmation mot de passe
    if (formData.password !== formData.confirmPassword) {
      nouvellesErreurs.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    setErreurs(nouvellesErreurs);

    // Si pas d'erreur
    if (Object.keys(nouvellesErreurs).length === 0) {
       Alert.alert(
              'Succès', 
              `Bienvenue ${formData.prenom} ${formData.nom}!\n\nVotre compte a été créé avec succès.`,
              [{ text: 'OK' }]
            );
        
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
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* NOM */}
        <View style={styles.header}>
          <Text style={styles.titre}>Créer un compte</Text>
          <Text style={styles.sousTitre}>Remplissez le formulaire ci-dessous</Text>
        </View>
        
        <View style={styles.champContainer}>
          <Text style={styles.label}>Nom :</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={formData.nom}
            onChangeText={(val) => handleChange("nom", val)}
            placeholder="Entrez votre Nom ici"
          />
          {erreurs.nom && <Text style={{ color: "red" }}>{erreurs.nom}</Text>}
        </View>

        {/* PRENOM */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Prénom :</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={formData.prenom}
            onChangeText={(val) => handleChange("prenom", val)}
            placeholder="Entrez votre Prénom ici"
          />
          {erreurs.prenom && <Text style={{ color: "red" }}>{erreurs.prenom}</Text>}
        </View>

        {/* AGE */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Âge :</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={formData.age}
            onChangeText={(val) => handleChange("age", val)}
            placeholder="Entrez votre âge ici"
            maxLength={2}
          />
          {erreurs.age && <Text style={{ color: "red" }}>{erreurs.age}</Text>}
        </View>

        {/* TELEPHONE */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Téléphone :</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={formData.telephone}
            onChangeText={(val) => handleChange("telephone", val)}
            placeholder="0612345678"
            maxLength={10}
          />
          {erreurs.telephone && <Text style={{ color: "red" }}>{erreurs.telephone}</Text>}
        </View>

        {/* EMAIL */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Email :</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            value={formData.email}
            onChangeText={(val) => handleChange("email", val)}
            placeholder="Entrez votre Email ici"
          />
          {erreurs.email && <Text style={{ color: "red" }}>{erreurs.email}</Text>}
        </View>

        {/* MOT DE PASSE */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Mot de passe :</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={formData.password}
            onChangeText={(val) => handleChange("password", val)}
            placeholder="Entrez votre mot de passe ici"
          />
          {erreurs.password && <Text style={{ color: "red" }}>{erreurs.password}</Text>}
        </View>

        {/* CONFIRMATION */}
        <View style={styles.champContainer}>
          <Text style={styles.label}>Confirmation MDP :</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={formData.confirmPassword}
            onChangeText={(val) => handleChange("confirmPassword", val)}
            placeholder="Confirmez votre mot de passe"
          />
          {erreurs.confirmPassword && <Text style={{ color: "red" }}>{erreurs.confirmPassword}</Text>}
        </View>

        {/* BOUTON SUBMIT */}
        <TouchableOpacity style={[styles.bouton, { marginTop: 30 }]} onPress={handleSubmit}>
          <Text style={styles.texteBouton}>Envoyer</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Form;
