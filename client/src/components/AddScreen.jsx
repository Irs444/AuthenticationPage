import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'
import { TextInput } from 'react-native-paper'

import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

const imgDir = FileSystem.documentDirectory + 'images/';

const ensureDieExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
}




const AddScreen = () => {

  const [imageList, setImageList] = useState('')

  const selectImage = async () => {

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      console.log(result.assets[0]);
    
      const fd = new FormData();
      fd.append('myfile', {
        uri: result.assets[0].uri,
        type: result.assets[0].type,
        name: result.assets[0].fileName
      })
      fd.append('upload_preset', 'AuthenticatePage')
      fd.append('cloud_name', 'dsbnrx4qj')
      fetch("https://api.cloudinary.com/v1_1/dsbnrx4qj/image/uploadfile", {
        method: "POST",
        body: fd,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // }
      }).then(res => res.json())
       
        .then(data => {
          console.log(data)
          setImageList(data.url)
        })
        .catch(err => {
          console.log(err)  
     } )
    }
  }

  const { logout, loggedIn } = useContext(UserContext)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')


  const handleLogout = () => {
    if (loggedIn) {
      return (
        <View style={{ marginVertical: 30, marginHorizontal: 100 }}>
          <Button title='Logout' onPress={logout} color={"red"} />
        </View>
      )
    } else {
      return <View>
        <Text>Not Logged In</Text>
      </View>
    }
  }

  const submitProduct = async () => {

    const res = await fetch("http://192.168.29.21:5000/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        name, category
      })
    })

    console.log(res.status);

    if (res.status === 200) {
      alert("Product Added")
    } else {
      alert("Failed to add product")
    }

  }





  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 30, marginTop: 40 }}>AddProduct</Text>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.form}>

          <Text style={styles.input}>Product Name</Text>
          <TextInput label="Product Name" mode='outlined' style={styles.inputText} value={name} onChangeText={(text) => setName(text)} />

          <Text style={styles.input}>Category</Text>
          <TextInput label="Category" mode='outlined' style={styles.inputText} value={category} onChangeText={(text) => setCategory(text)} />

          <View style={{ marginVertical: 10 }}>
            <Button title='Add Image' color={"darkviolet"} onPress={() => selectImage()} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button title='Submit' color={"mediumorchid"} onPress={() => submitProduct()} />
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