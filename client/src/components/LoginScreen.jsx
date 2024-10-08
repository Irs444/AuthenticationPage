import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserContext } from '../context/userContext'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {

    const navigation = useNavigation()

    const { setLoggedIn } = useContext(UserContext)
    const [hidePass, setHidePass] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Submit = async () => {

        const res = await fetch("http://192.168.29.21:5000/user/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        console.log(res.status);

        if (res.status === 200) {
            setLoggedIn(true)
            const data = await res.json()
            AsyncStorage.setItem("isLoggedin", "true")
            console.log(data);
            if (data.role === "admin") {
                AsyncStorage.setItem("admin", JSON.stringify(data))
                navigation.navigate("AddProduct")
            } else {
                AsyncStorage.setItem("user", JSON.stringify(data))
                navigation.navigate("Product")
            }


        } else {
            alert("Invalid data")
        }
    }


    return (
        <View style={{ margin: 10 }}>

            <Text style={{ marginTop: 100, fontSize: 40, fontWeight: "bold" }}>Welcome</Text>
            <Text style={{ marginTop: 10, fontSize: 15 }}>Login to your account</Text>
            <View style={styles.container}>
                <TextInput style={styles.inputText} label="Email" mode='outlined' value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput style={styles.inputText} label="Password" mode='outlined' secureTextEntry={hidePass}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    right={<TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)} />}
                />
                <View>
                    <Button onPress={() => Submit()} style={{ marginTop: 10, fontWeight: "bold", fontSize: 20 }} mode='contained' >Sign in</Button>
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
        backgroundColor: "white",

    }
})