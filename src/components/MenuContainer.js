import React from 'react'
import { View, Text, Touchable,Image, TouchableOpacity } from 'react-native'


/**
* @author Birdev
* @function MenuContainer
**/
export const MenuContainer = ({title, images , type, setType}) => {
    handlePress=(title)=>{
        setType(title.toLowerCase())
    }

 return(
  <TouchableOpacity 
  className='items-center justify-center space-y-2 ml-2'
  onPress={()=>handlePress(title)}>
    <View className={`w-24 h-24 p-2 shadow-sm rounded-full bg-slate-500/10
                       ${type===title.toLowerCase()? 'bg-gray-200' : ''}`}>
        <Image 
        source={images}
        className='w-full h-full object-contain'
        />
    </View>
    <Text className='text-[#4DABB7] text-xl font-semibold'>{title}</Text>
  </TouchableOpacity>
  )
}


