import { View } from "react-native";
import Parent from "./propdrilling/parent";
 
 
 
 
 
const MyApp=()=> {
  const username = "Ronaldo";
  return (<View style={{margin:100}}><Parent username={username}/></View>)
}
 
export default MyApp