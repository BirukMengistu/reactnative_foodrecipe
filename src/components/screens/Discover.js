import React,{useLayoutEffect, useState} from 'react'
import { View, Text, SafeAreaView ,Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native' 
import { Attractions, Avatar, Hotels, Restaurants } from '../../../assets'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { API_KEY } from '../constants';
import { MenuContainer } from '../MenuContainer';
/**
* @author Birdev
* @function Discover
*AIzaSyBm5TKBhinXHT-LMFqzSZQhgStf8JidHz8
**/
export const Discover = () => {
    const [aciveState ,setActiveState]= useState('Restaurants')
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
          headerShown:false
        })},[])

 return(
    <SafeAreaView className='bg-white flex-1 relative' >
            <View className='flex-row items-center justify-between px-8'>
               <View >
                <Text className='text-[#38a7b8] text-[38px] font-bold'>Discover</Text>
                <Text className='text-[#66e3f7] text-[36px]'>search Result</Text>
               </View>
               <View className='w-12 h-12 bg-slate-500 rounded-md items-center justify-center'>
                      <Image 
                      source={Avatar}
                      className='w-full h-full rounded-md object-cover'
                      />
               </View>
            </View>
            <View className='flex-row items-center bg-white mx-4 
              rounded-xl py-1 px-4 shadow-lg '>
            <GooglePlacesAutocomplete
    
                    placeholder='Search'
                    fetchDetails={true}
                    GooglePlacesDetailsQuery={{fields:'geometry'}}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(details?.geometry?.viewport);
                    }}
                    query={{
                        key: 'AIzaSyBm5TKBhinXHT-LMFqzSZQhgStf8JidHz8',
                        language: 'en',
                    }} />
            </View>
            {/* Menu Container*/}
            <ScrollView>
                <View className='flex-row items-center justify-between px-8 mt-8'>
                     <MenuContainer 
                     key={'Hotels'}
                     title='Hotels'
                     images={Hotels}
                     type={aciveState}
                     setType={setActiveState}
                     />
                      <MenuContainer 
                     key={'Restaurants'}
                     title='Restaurants'
                     images={Restaurants}
                     type={aciveState}
                     setType={setActiveState}
                     />
                      <MenuContainer 
                     key={'Attractions'}
                     title='Attractions'
                     images={Attractions}
                     type={aciveState}
                     setType={setActiveState}
                     />
                   
                </View>
            </ScrollView>
    </SafeAreaView>
 
  )
}


