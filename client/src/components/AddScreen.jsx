import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { UserContext } from '../context/userContext'
import AsyncStorage from '@react-native-async-storage/async-storage'



const AddScreen = () => {

  const { logout, loggedIn } = useContext(UserContext)
  // const [data, setData] = useState(null);


  const handleLogout = () => {
    if (loggedIn) {
      return (
        <View>
          <Button title='Logout' onPress={logout} />
        </View>
      )
    } else {
      return <View>
        <Text>Not Logged In</Text>
      </View>
    }
  }


  // const fetchData = async () => {
  //   try {
  //     const storedData = await AsyncStorage.getItem("data");
  //     setData(storedData);
  //     const response = await fetch("http://192.168.29.21:5000/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${storedData}`,
  //       },
  //     });

  //     const result = await response.json();
  //     console.log(result);

  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [])



  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 30, marginTop: 40 }}>AddScreen</Text>
      <View style={{ marginHorizontal: 20 }}>
        {
          handleLogout()
        }
      </View>
     

    </View>
  )
}

export default AddScreen

const styles = StyleSheet.create({})