import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

const  PageB=({ navigation })=> {
  return (
    <View style={styles.container}>
      {/* Menu horizontal en haut */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menu}
        style={styles.menuWrapper}
      >
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>goBack()</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>navigate → Accueil</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('PageC')}>
                  <Text style={styles.buttonText}>navigate → PageC</Text>
                </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.push('PageA')}>
                  <Text style={styles.buttonText}>push → PageA</Text>
                </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.push('PageB')}>
                  <Text style={styles.buttonText}>push → PageB</Text>
                </Pressable>
         <Pressable style={styles.button} onPress={() => navigation.replace('PageC')}>
                  <Text style={styles.buttonText}>replace → PageC</Text>
                </Pressable>
      </ScrollView>

      {/* Contenu principal */}
      <View style={styles.content}>
        <Text style={styles.title}>📄 Page B</Text>
      </View>
    </View>
  );
}
export default PageB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
