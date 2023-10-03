import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  useColorScheme
} from 'react-native'
//this JSX.Element is a type that describes the JSX object that is returned from a React component
function AppPro() :JSX.Element{
  const isDarkMode = useColorScheme() === 'dark' //useColorScheme() returns 'light' or 'dark'
  return(
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText: styles.darkText}>Hello World</Text>

    </View>
  )
}

//here we are using StyleSheet.create() to create a stylesheet object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteText:{
    color: '#FFFFFF'
  },
  darkText:{
    color: '#000000'
  }
})

export default AppPro