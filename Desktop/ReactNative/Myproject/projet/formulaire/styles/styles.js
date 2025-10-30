import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // --- CONTENEUR PRINCIPAL ---
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  // --- SCROLL ---
  scrollContent: {
    paddingVertical: 50,
    alignItems: 'center',
  },

  // --- HEADER ---
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
    width: '100%',
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  input: {
    height: 55,
    backgroundColor: '#f8f9fa',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    width: '100%',
  },

  texteErreur: {
    color: '#dc3545',
    fontSize: 14,
    marginTop: 6,
    fontWeight: '500',
  },

  // --- BOUTONS ---
  bouton: {
    backgroundColor: '#007bff',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },

  texteBouton: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;