import { Button, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const HomeScreen = ({ navigation }) => {
  return (
    
   
        <View style={styles.container}>
          <ImageBackground source={require("../../assets/download.jpeg")} resizeMode='cover' style={styles.img}>

            <View style={styles.text_container}>
              <Text style={styles.text}>Best Mobile App Template for Your Bussiness</Text>
              <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, optio?</Text>
              <View style={styles.btn}>
               <Button  title='Get Started' color="indigo" onPress={() => navigation.navigate("Signup")} />
              </View>
            </View>
          </ImageBackground>


        </View>
      
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
     height:"100%"
       
  },
  img:{
    flex:1,
    justifyContent:"center",
    opacity:0.9,
   
   
  }, 
  btn:{
    marginHorizontal:20,
    elevation:15,
    marginBottom:20,
    
  },
  text_container:{
   backgroundColor:"rgba(0,0,0,0.5)",
   padding:10,
   margin:10,
   borderRadius:10
  },
  text:{
    color:"white",
    fontSize:40,
    fontWight:"bold",
    textAlign:"center",
    marginBottom:10,
    elevation:15
  },
  text1:{
   color:"white",
   textAlign:"center",
   fontSize:20,
   marginBottom:20 
  }
 
 
})