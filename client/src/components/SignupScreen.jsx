import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'



const SignupScreen = ({ navigation }) => {

    const [hidePass, setHidePass] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const Submit = async () => {
        const res = await fetch("http://192.168.29.21:5000/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password,
                confirmPassword
            })
        })
        const data = await res.json()
        console.log(data);

        if (res.status === 200) {
            navigation.navigate("Login")
        } else {
            alert("Invalid data")
        }


    }



    return (
        <View style={{ margin: 10 }}>
<ScrollView>
            <Text style={{ marginTop: 70, fontSize: 40, fontWeight: "bold" }}>Signup Here</Text>
            <Text style={{ marginTop: 10, fontSize: 15 }}>Create  your new account</Text>
            <View style={styles.container}>
                <TextInput style={styles.inputText} label="Name" mode="outlined" value={name} onChangeText={(text) => setName(text)} />
                <TextInput style={styles.inputText} label="Email" mode="outlined" value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput style={styles.inputText}
                    label="Password"
                    mode="outlined"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={hidePass}
                    right={<TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)} />}
                />
                <TextInput style={styles.inputText}
                    label="Confirm password"
                    mode="outlined"
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                    secureTextEntry={hidePass}
                    right={<TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)} />}
                />
                <View>
                    <Button onPress={() => Submit()}  mode='contained' >Sign up</Button>
                </View>
            </View>
            <Text style={{ marginTop: 25, fontSize: 15, textAlign: "center" }}>Already a member <Text onPress={() => navigation.navigate("Login")} style={{ color: "darkviolet", fontWeight: "bold" }}>Sign in</Text> </Text>
            </ScrollView>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
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