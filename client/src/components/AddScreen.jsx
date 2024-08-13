import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

const AddScreen = () => {

  const {value ,setVal  } = useContext(UserContext);

  return (
    <View>
      <Text  style={{textAlign:"center", fontSize:30 , marginTop:40}}>AddScreen</Text>
      <Text style={{fontSize:20}}>{value}</Text>
      <Text style={{fontSize:20}}>{value}</Text>
      <Text style={{fontSize:20}}>{value}</Text>
     
      <Button title='Submit' onPress={() => setVal(value+1)}/>
    </View>
  )
}

export default AddScreen

const styles = StyleSheet.create({})