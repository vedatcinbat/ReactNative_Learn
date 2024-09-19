import { StyleSheet, Text, View } from "react-native";

export const Basics = () => {
  return (
    <View>
      <Text>Hello Vedat</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: "red",
    },
    boxContainer: {
      flex: 1,
      flexDirection: "row",
      gap: 20
    }
  });
