import { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";


const ShowCounter = ({ count }: {count:number}) => {
    return (
        <Text>Counter: {count}</Text>
    )
}


const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.counterContainer}>
            <ShowCounter count={count} />
            <Button title="Increase" onPress={() => setCount(count+1)} />
            <Button title="Decrease" onPress={() => setCount(count-1)} />
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    counterContainer: {
        marginTop: 50,
    },
})