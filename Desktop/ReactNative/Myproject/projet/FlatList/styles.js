// Styles
import {  StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
 articleContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    marginLeft: 12,
    justifyContent: 'center',
  },
 nom: {
    fontSize: 18,
    fontWeight: '500',
  },
  prix: {
    fontSize: 16,
    color: '#888',
  },
  separator: {
    height: 12,
  },

  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginHorizontal: 6,
    marginVertical: 6,
    width: 120, // largeur fixe
    height: 35, // hauteur fixe
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },

  cartContainer: {
  marginTop: 20,
  padding: 16,
  backgroundColor: '#f9f9f9',
  borderTopWidth: 1,
  borderColor: '#ccc',
},
cartTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 8,
},
cartItem: {
  fontSize: 16,
  marginBottom: 4,
},
});
