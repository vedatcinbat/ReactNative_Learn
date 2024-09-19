import { View, Text, Button } from "react-native";
import { Basics } from "../components/Basics";

export default function DetailsScreen({navigation}: {navigation: any}) {
  return (
    <View>
      <Text>Details</Text>
      <Basics />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
