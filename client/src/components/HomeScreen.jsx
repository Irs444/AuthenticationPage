import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground source={require("../../assets/coffee.jpeg")} style={{ width: "100%", height:800 }}/>
         
          <View>
            <Text>Best Mobile App Template for Your Bussiness</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, optio?</Text>
            <View>
              <Button title='Explore Now' />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
container:{
   flex:1,
    justifyContent:"center",
    
    
},
hero:{
  backgroundColor:"lightgrey",
  padding:10,
  borderRadius:10,
  margin:10
},
heroImg:{
  width:"100%",
  height:400,
  mixBlendMode:"multiply"
 
}
})