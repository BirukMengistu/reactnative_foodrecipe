import React from 'react'
import { View, Text, Image,StyleSheet ,TouchableOpacity} from 'react-native'
import { MapIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
/**
* @author
* @function ItemCard


**/
export const ItemCard = ({
                        imageSrc,
                        title,
                        location,
                        data
}) => {
    const navigation = useNavigation()
 return(
  <TouchableOpacity 
  onPress={()=>navigation.navigate('Itemcard',{param:data})}
   className='rounded-md border border-gray-300 shadow-md space-y-2 my-2 px-3 py-2
         bg-white w-[182px]' >
    <Image 
    source={{uri:imageSrc}}
    className='w-full h-40 object-cover'/>
    {title && 
        (
        <>
        <Text className='text-[#38a7b8] text-[18px] font-bold'>
        {title?.length > 14 ?`${title?.slice(0, 14)}...`: title}</Text>
          <View className='flex-row items-center space-x-1'>
            <MapIcon  color="gray" fill="#38a7b8" size={24}/>
         <Text className='text-[#38a7b8] text-[18px] '>{
           location?.length > 14? `${location?.slice(0, 14)}...`:location }
           </Text>
        </View>
        </>
        )}
    
  </TouchableOpacity>
  )
}


