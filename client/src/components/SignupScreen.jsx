import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'


const SignupScreen = ({navigation}) => {

    const[hidePass , setHidePass] = useState(true)

    return (
        <View style={{margin:10}}>
            <Text style={{ marginTop: 100, fontSize:40, fontWeight:"bold" }}>Signup Here</Text>
            <Text style={{marginTop:10, fontSize:15}}>Create  your new account</Text>
            <View style={styles.container}>
                <TextInput style={styles.inputText} label="Name" mode="outlined" />
                <TextInput style={styles.inputText} label="Email" mode="outlined" />
                <TextInput style={styles.inputText} label="Password" mode="outlined" secureTextEntry={true} 
                 />
                <TextInput style={styles.inputText} label="Confirm password" mode="outlined" secureTextEntry="true"  />
                <View>
                    <Button style={{ marginTop: 10, fontWeight:"bold", fontSize:20}}  mode='contained' >Sign up</Button>
                </View>
            </View>
            <Text style={{marginTop:25,fontSize:15, textAlign:"center"}}>Already a member <Text onPress={() => navigation.navigate("Login")} style={{color:"darkviolet", fontWeight:"bold"}}>Sign in</Text> </Text>

        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical:50,
    borderRadius: 10,
    backgroundColor:"white",
    elevation:15
  }, 
  inputText:{
    marginBottom: 15,
    backgroundColor:"white"
  }
})