import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Button } from 'react-native-paper'
import { UserContext } from '../context/userContext'

const ProductScreen = () => {

  const { logout, loggedIn } = useContext(UserContext)
  
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
  return (
    <View>
      <View style={styles.btn} >
        <Button mode='contained-tonal'>All</Button>
        <Button mode='contained-tonal'  >Nature</Button>
        <Button mode='contained-tonal'>WildLife</Button>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.body}>
              <Image source={require("../../assets/lion.jpeg")} style={{ height: 150, width: 150, objectFit: 'fill' }} />
            </View>
            <View style={styles.body}>
              <Image source={require("../../assets/lion.jpeg")} style={{ height: 150, width: 150, objectFit: 'fill' }} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.body}>
              <Image source={require("../../assets/lion.jpeg")} style={{ height: 150, width: 150, objectFit: 'fill' }} />
            </View>
            <View style={styles.body}>
              <Image source={require("../../assets/lion.jpeg")} style={{ height: 150, width: 150, objectFit: 'fill' }} />
            </View>
          </View>

          <View>
            {handleLogout()}
          </View>
        

        </View>
      </ScrollView>

    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,

  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  body: {
    height: 150,
    width: 150,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10,

  },
  
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:70
      
    
    
  }
})