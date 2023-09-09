import React,{useLayoutEffect} from 'react'
import { View, Text, SafeAreaView ,Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native' 
import { HeroImage } from '../../../assets'
/**
* @author Birdev
* @function HomeScreen
**/
const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])
 return(
  <SafeAreaView className='bg-white/10 flex-1 relative ' >
        
        <View className='flex-row px-6 mt-8 items-center space-x-2'>
        <View className='w-16 h-16 bg-black items-center rounded-full justify-center'>
          <Text className='text-[#4DABB7] text-3xl font-semibold '>Go</Text>
        </View>
         <Text  className='text-[#4DABB7] text-3xl font-semibold'>#HashTag search</Text>
        </View>
        <View className=' px-6 mt-8 space-y-2'>
          <Text className='text-[#121212] text-[42px]'>Enjoy your search</Text>
          <Text className='text-[#4DABB7] text-[38px] font-bold'>Amazing Moment</Text>
          <Text className='text-[#161c1d] text-base'>
            klkllkl lölkkl skljskljlk
         </Text>
        </View>
         {/* circle section */}
         <View className='w-[400px] h-[400px] bg-[#4DABB7] rounded-full absolute -right-36 bottom-36'></View>
         <View className='w-[400px] h-[400px] bg-[#d8c049] rounded-full absolute -right-36 -bottom-28'></View>
         {/* image container section */}
         <View className='flex-1 items-center justify-center  relative '>
          <Animatable.Image
          animation='fadeIn'
          easing='ease-in-out'
          source={HeroImage}
          className='w-full h-full object-cover mt-20'
          /> 
          <View className='absolute bottom-20 w-24 h-24 rounded-full border-l-2 border-r-2
                           border-t-4 border-[#4DABB7] 
                           items-center justify-center'>
               <TouchableOpacity 
               onPress={()=> navigation.navigate('Discover')}>
              <Animatable.View
                     animation={'pulse'}
                     easing='ease-in-out'
                     iterationCount={'infinite'}
                     className='w-20 h-20 items-center justify-center 
                     bg-[#4DABB7] rounded-full'>
                    <Text className ='text-white text-[32px] font-semibold'>Go</Text>
                    </Animatable.View>
                </TouchableOpacity>
          
         </View>
         </View>
         
  </SafeAreaView>
  )
}


export default HomeScreen