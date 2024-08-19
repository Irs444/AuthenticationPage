import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { UserContext } from '../context/userContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput } from 'react-native-paper'



const AddScreen = () => {

  const { logout, loggedIn } = useContext(UserContext)
  // const [data, setData] = useState(null);


  const handleLogout = () => {
    if (loggedIn) {
      return (
        <View style={{marginVertical:30, marginHorizontal:100}}>
          <Button title='Logout' onPress={logout} color={"red"} />
        </View>
      )
    } else {
      return <View>
        <Text>Not Logged In</Text>
      </View>
    }
  }





  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 30, marginTop: 40 }}>AddProduct</Text>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.form}>
          <Text style={styles.input}>Product Name</Text>
          <TextInput label="Product Name" mode='outlined' style={styles.inputText} />
          <Text style={styles.input}>Category</Text>
          <TextInput label="Category" mode='outlined' style={styles.inputText} />
          <View style={{ marginVertical: 10 }}>
            <Button title='Add Image' color={"darkviolet"} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button title='Submit' color={"mediumorchid"} />
          </View>
        </View>
        {
          handleLogout()
        }
      </View>


    </View>
  )
}

export default AddScreen

const styles = StyleSheet.create({
  form: {
    // borderWidth: 1,
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    elevation: 15

  },
  input: {
    fontSize: 20,
    marginBottom: 10,

  },
  inputText: {
    backgroundColor: "white",
    marginBottom: 10,
  }


})