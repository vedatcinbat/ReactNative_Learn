import { View, Text, Button } from "react-native";
import { Basics } from "../components/Basics";

export default function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View>
      <Text>Homepage</Text>
      <Text>Hello Vedat</Text>
      {/* <Button title="Go to details" onPress={() => navigation.navigate('Details')} /> */}
      {/* <Button title="Go to posts" onPress={() => navigation.navigate('Posts')} /> */}
      <Button title="Go to section lists" onPress={() => navigation.navigate('SectionLists')} />
    </View>
  );
}
