import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Basics } from "./components/Basics";
import Images from "./components/Images";
import Counter from "./components/Counter";
import UserInput from "./components/UserInput";

// Navigation in React-Native
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

/* export default function App() {
  return (
    <View>
      <Basics />
      <Images />
      <Counter />
      <UserInput />
    </View>
  );
} 
  */

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
