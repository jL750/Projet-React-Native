import { Button, Alert, TouchableOpacity, View, Text, Pressable} from "react-native";


const ButtonSimple=() =>
{
    return(
        <View>
        <Button title="Cliquez-moi" onPress={() => Alert.alert('Bouton cliqué ! ')} 
            color="#841584"
            disabled={false}
            />
            
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15, borderRadius: 8 }}
            onPress={() => console.log('Cliqué ! ')}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Mon Bouton</Text>
        </TouchableOpacity>   

        <Pressable style={{ backgroundColor: 'red', padding: 15, borderRadius: 8 }}
            OnPress={() => console.log('Pressé ! ')} 
            onLongPress={()=> console.log('Appui long')}
            >
            {({pressed}) => (
                <Text style={{ color: '#fff'}}>
                    {pressed ? 'Appuyé ! ' : 'Appuyez Moi'}
                </Text>
            )}  
            </Pressable>
        </View>
    );
}   

export default ButtonSimple

