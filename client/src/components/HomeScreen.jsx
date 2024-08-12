import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.home}>Welcome to Home Page</Text>
      <Button title='Go to Signup' onPress={() => navigation.navigate("Signup")} ></Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    home:{
        marginTop: 100,
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
    }
})