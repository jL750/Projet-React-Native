import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // --- CONTENEUR PRINCIPAL ---
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center', // centre verticalement
    alignItems: 'center',     // centre horizontalement
    paddingHorizontal: 20,
  },

  // --- SCROLL ---
  scrollContent: {
    paddingVertical: 40,
    alignItems: 'center',
  },

  // --- HEADER (inchangé) ---
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

  // --- CHAMPS FORMULAIRE ---
  champContainer: {
    width: 300,              // largeur fixe pour tout centrer
    marginBottom: 20,
    alignItems: 'center',    // centre le contenu horizontalement
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    alignSelf: 'flex-start',
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
    width: '100%',
  },

  texteErreur: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 5,
    height: 16,           // espace fixe pour éviter le décalage
    textAlign: 'left',
    width: '100%',
  },

  bouton: {
    backgroundColor: '#3498db',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 300,           // même largeur que les inputs
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
});

export default styles;
