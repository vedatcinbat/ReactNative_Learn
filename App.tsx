import { StatusBar } from "expo-status-bar";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { Basics } from "./components/Basics";
import Images from "./components/Images";
import Counter from "./components/Counter";
import UserInput from "./components/UserInput";

// Navigation in React-Native
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PostsScreen from "./screens/PostsScreen";
import SectionListsScreen from "./screens/SectionListsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
const Tab = createBottomTabNavigator();

/* const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="SectionLists" component={SectionListsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
} */

/* const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="SectionLists" component={SectionListsScreen} />
      </Tab.Navigator>   
    </NavigationContainer>
  )
};
 */

/* const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={DetailsScreen} />
        <Drawer.Screen name="Posts" component={PostsScreen} />
        <Drawer.Screen name="SectionLists" component={SectionListsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} */

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="SectionLists" component={SectionListsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
