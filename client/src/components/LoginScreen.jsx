import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

const LoginScreen = ({navigation}) => {
    return (
        <View style={{ margin: 10 }}>
            
          <Text style={{ marginTop: 100, fontSize: 40, fontWeight: "bold" }}>Welcome</Text>
                <Text style={{ marginTop: 10, fontSize: 15 }}>Login to your account</Text>
                <View style={styles.container}>

                    <TextInput style={styles.inputText} label="Email" mode="outlined" />
                    <TextInput style={styles.inputText} label="Password" mode="outlined" />

                    <View>
                        <Button style={{ marginTop: 10, fontWeight: "bold", fontSize: 20 }} mode='contained' >Sign in</Button>
                    </View>
                </View>

                <Text style={{ marginTop: 25, fontSize: 15, textAlign: "center" }}>Create an account? <Text onPress={() => navigation.navigate("Signup")} style={{ color: "darkviolet", fontWeight: "bold" }}>Sign up</Text> </Text>
           
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingHorizontal: 20,
        paddingVertical: 50,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 15
    },
    inputText: {
        marginBottom: 15,
        backgroundColor: "white"
    }
})