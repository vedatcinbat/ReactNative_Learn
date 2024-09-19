import { View, Text, Button, StyleSheet, ScrollView, FlatList } from "react-native";
import { Basics } from "../components/Basics";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default function PostsScreen({ navigation }: { navigation: any }) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  if (posts.length === 0) {
    return <Text>Loading...</Text>;
  }
  return (
    <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
            <View style={styles.postBox}>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
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


/*
{/* <ScrollView>
      <View>
        <Text>Posts</Text>
        <View style={styles.postsContainer}>
          {posts.map((post) => (
            <View style={styles.postBox}>
              <Text>{post.title}</Text>
              <Text>{post.body}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView> */