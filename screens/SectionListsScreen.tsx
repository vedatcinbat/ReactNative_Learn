import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";
import { Basics } from "../components/Basics";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default function SectionListsScreen({
  navigation,
}: {
  navigation: any;
}) {
  const DATA = [
    {
      title: "Fruits",
      data: ["Apple", "Banana", "Orange"],
    },
    {
      title: "Vegetables",
      data: ["Carrot", "Broccoli", "Spinach"],
    },
  ];

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: 800, fontSize: 20 }}>{title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  postsContainer: {
    backgroundColor: "lightblue",
    padding: 2,
    margin: 5,
    borderRadius: 5,
  },
  postBox: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "lightgray",
    borderRadius: 15,
  },
});
