import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // --- Centrage vertical et horizontal du contenu principal ---
    justifyContent: 'center',  // centre verticalement
    alignItems: 'center',      // centre horizontalement
    paddingHorizontal: 20,     // espace intérieur latéral
    paddingTop: 50,          // espace intérieur en haut
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    padding: 20,
  },

  header: {
    marginBottom: 30,
  },

  titre: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },

  sousTitre: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },

  champContainer: {
    width: '100%',
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
    width: 300,                // largeur fixe pour un bon centrage visuel
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
    width: 300,                // même largeur que l’input
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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

export default styles;
