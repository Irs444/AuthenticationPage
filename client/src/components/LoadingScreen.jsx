import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

const LoadingScreen = () => {
  return (
    <View>
     <ActivityIndicator animating={true} color="darkviolet" size={"large"} style={{paddingVertical:"auto", height:"100%" }} />
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})