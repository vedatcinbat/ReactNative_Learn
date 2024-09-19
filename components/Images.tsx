import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
const image1 = require("../assets/images/aotImage.jpg");
const image2 = require("../assets/images/japanimg.jpg");
const image3 = require("../assets/images/japanimg2.jpg");
const image4 = require("../assets/images/narutoimg.jpg");

export default function Images() {
  return (
    <ScrollView style={styles.imageContainer}>
      <TextInput
        style={{ borderWidth: 1, borderColor: "black", margin: 10 }}
        placeholder="Enter your name"
      />
      <Image style={styles.imageBox} source={image1} />
      <Image style={styles.imageBox} source={image2} />
      <Image style={styles.imageBox} source={image3} />
      <TouchableOpacity onPress={() => alert('Button pressed!')}>
        <Image style={styles.imageBox} source={image4} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {},
  imageBox: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
