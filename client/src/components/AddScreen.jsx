import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

const AddScreen = () => {

  const { value, setValue} = useContext(UserContext)
  return (
    <View>
      <Text  style={{textAlign:"center", fontSize:30 , marginTop:40}}>AddScreen</Text>
      <Text>{value}</Text>
     
      <Button title='Submit' onPress={() => 
        setValue(value + 1)
        
      }/>
    </View>
  )
}

export default AddScreen

const styles = StyleSheet.create({})