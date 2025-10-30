import { Button, Alert, TouchableOpacity, View, Text, Pressable, ScrollView} from "react-native";


const ButtonMenu=() =>
{
    return(
        <ScrollView contentContainerStyle={{backgroundColor: "purple", padding:15, borderRadius: 8, marginTop:50}} 
        horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ marginTop: 20, marginLeft:10}}>
                <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15, borderRadius: 8 }}
                    onPress={() => Alert.alert('Cliqué sur Accueil ! ')}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>Accueil</Text>
                </TouchableOpacity>
            </View>
                
            <View style={{ marginTop: 20, marginLeft:10}}>
                <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15, borderRadius: 8 }}
                    onPress={() => Alert.alert('Cliqué sur Catalogue ! ')}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>Catalogue</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20, marginLeft:10}}>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15, borderRadius: 8 }}
                onPress={() => Alert.alert('Cliqué sur Inscription ! ')}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Inscription</Text>
            </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20, marginLeft:10}}>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15, borderRadius: 8 }}
                onPress={() => Alert.alert('Cliqué sur Connexion ! ')}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Connexion</Text>
            </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, marginLeft:10}}>
                <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15, borderRadius: 8 }}
                    onPress={() => Alert.alert('Cliqué sur Accueil ! ')}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>Contacte</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}   

export default ButtonMenu

