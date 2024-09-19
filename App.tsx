import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Basics } from "./components/Basics";
import Images from "./components/Images";
import Counter from "./components/Counter";
import UserInput from "./components/UserInput";

export default function App() {
  return (
    <View>
      {/* <Basics /> */}
      {/* <Images /> */}
      <Counter />
      <UserInput />
    </View>
  );
}
