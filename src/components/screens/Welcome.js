import { useNavigation } from '@react-navigation/native'
import React ,{useLayoutEffect}from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function 
**/
const ItemScreen = ({route}) => {
  const navigation = useNavigation()
  const data = route?.params?.param;
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })},[])

   console.log('item card ', data)
 return(
  <View >
    <Text>WelcomeScreen</Text>
  </View>
  )
}

export default ItemScreen
