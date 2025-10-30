// Styles
import {  StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
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
});
