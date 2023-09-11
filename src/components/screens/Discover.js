import React,{useEffect, useLayoutEffect, useState} from 'react'
import { View, Text, SafeAreaView ,ActivityIndicator, StatusBar,Image, TouchableOpacity, ScrollView ,StyleSheet, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native' 
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../../../assets'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { API_KEY } from '../constants';
import { MenuContainer } from '../MenuContainer';
import { ItemCard } from '../Card';
import { getPlaceData } from '../../api';
/**
* @author Birdev
* @function Discover
*AIzaSyBm5TKBhinXHT-LMFqzSZQhgStf8JidHz8
**/
export const Discover = () => {
    const [aciveState ,setActiveState]= useState('restaurants')
    const [isLoding, setISLoding] = useState(false)
    const [mainData, setMainData] = useState('')
    const [bl_lat, setBl_lat]=useState(null)
    const [bl_lon, setBl_lon]=useState(null)
    const [tr_lat, setTr_lat]=useState(null)
    const [tr_lon, setTr_lon]=useState(null)
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
          headerShown:false
        })},[])


   useEffect(()=>{
      setISLoding(true)
      getPlaceData(bl_lon,bl_lat,tr_lat,tr_lon , aciveState)
        .then(data =>{
        setMainData(data)
        setInterval(()=>{
         setISLoding(false)
        }, 2000)
      })
   },[bl_lon,bl_lat,tr_lat,tr_lon ,aciveState])

 return(
    <SafeAreaView className='bg-[#e8f7f9] flex-1 relative' style={styles.andoridContainerArea} >
            <View className='flex-row items-center justify-between px-8'>
               <View className =''>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                <Text className='text-[#38a7b8] text-[38px] font-bold'>Discover</Text>
                </TouchableOpacity>
                
                <Text className='text-[#66e3f7] text-[36px] '>search Result</Text>
               </View>
               <View className='w-16 h-16 bg-slate-500 rounded-full items-center justify-center'>
                      <Image 
                      source={Avatar}
                      className='w-full h-full rounded-full object-cover'
                      />
               </View>
            </View>
            <View className='flex-row items-center bg-white mx-4 
              rounded-xl py-1 px-4 shadow-xl '>
            <GooglePlacesAutocomplete
                    placeholder='Search'
                    fetchDetails={true}
                    GooglePlacesDetailsQuery={{fields:'geometry'}}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setBl_lat(details?.geometry?.viewport?.southwest?.lat)
                        setBl_lon(details?.geometry?.viewport?.southwest?.lng)
                        setTr_lat(details?.geometry?.viewport?.northeast?.lat)
                        setTr_lon(details?.geometry?.viewport?.northeast?.lng)
                        console.log({bl_lat,bl_lon,tr_lat,tr_lon});
                    }}
                    query={{
                        key: 'AIzaSyBm5TKBhinXHT-LMFqzSZQhgStf8JidHz8',
                        language: 'en',
                    }} />
            </View>
            {/* Menu Container*/}
           {isLoding? <View className='flex-1 items-center justify-center'>
                     <ActivityIndicator  size="large" color="#49d0e5"/>
           </View> :<ScrollView>
                <View className='flex-row items-center justify-between px-8 mt-8'>
                     <MenuContainer 
                     key={'hotels'}
                     title='Hotels'
                     images={Hotels}
                     type={aciveState}
                     setType={setActiveState}
                     />
                      <MenuContainer 
                     key={'restaurants'}
                     title='Restaurants'
                     images={Restaurants}
                     type={aciveState}
                     setType={setActiveState}
                     />
                      <MenuContainer 
                     key={'attractions'}
                     title='Attractions'
                     images={Attractions}
                     type={aciveState}
                     setType={setActiveState}
                     />
                   
                </View>
                <View>
                  <View className='flex-row items-center justify-between px-8 mt-8'> 
                    <Text className='text-[#38a7b8] text-[28px] font-bold'>Top Tips</Text>
                    <TouchableOpacity className='flex-row items-center justify-center space-x-2 text-[#49d0e5] '>
                        <Text  className='text-[#38a7b8] text-[20px] font-semibold'>
                           Expoler</Text> 
                          <ArrowRightIcon color="gray" fill="#38a7b8" size={24}/>
                          
                    </TouchableOpacity>
                    
                  </View>
                   <View className =" px-3 mt-8 flex-row items-center justify-evenly
                                    flex-wrap bg-slate-400/10">
                                      {mainData?.length === null?
                                       <View className='items-center space-y-8 justify-center
                                       h-[600] w-full'>
                                          <Image
                                          source={NotFound}  
                                           className='w-32 h-32 object-cover'
                                          />
                                          <Text className='text-2xl text-[#1e555e] font-semibold'>
                                            sorry ... No Data found
                                          </Text>
                                      </View>:
                                        <>
                                        {mainData && mainData?.map((data ,index)=>
                                    <ItemCard
                                      key={index}
                                      imageSrc={data?.photo?.images?.medium?.url?
                                        data?.photo?.images?.medium?.url
                                      :'https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_960_720.jpg'}
                                      title = {data.name}
                                      location={data.address}
                                      data={data}
                                      /> )}
                                     </> 
                        }
                       
                   </View>
                  
                </View>
            </ScrollView>}

    </SafeAreaView>
 
  )
}


const styles = StyleSheet.create({
  andoridContainerArea:{
   flex:1,
   paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
   
  }
})