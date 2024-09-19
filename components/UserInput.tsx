import { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const UserInput = () => {
    const [text, setText] = useState('')


    const handleAlertPress = () => {
        alert(`Your text: ${text}`)
    }

    return (
        <View>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder="Type something..."
                onChangeText={newText => setText(newText)}
            />
            <Text>Text: {text}</Text>
            <Button title="Alert Message" onPress={handleAlertPress} />
        </View>
    )
}

export default UserInput