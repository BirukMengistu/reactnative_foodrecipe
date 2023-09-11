import React from 'react'
import { View, Text, StyleSheet, ScrollView,Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {ChevronLeftIcon ,HeartIcon ,MapIcon ,StarIcon , 
    CurrencyDollarIcon , MapPinIcon, PhoneIcon ,ArrowDownOnSquareIcon, InboxIcon} from 'react-native-heroicons/solid'
/**
* @author
* @function ItemCardContainer
**/
export const ItemCardContainer = ({route}) => {
    const data =route?.params?.param

 return(
  <SafeAreaView className='flex-1 bg-white relative'>
     <ScrollView className='flex-1 px-4 py-6'>
           <View  className='relative bg-white shadow-lg rounded-md'>
                 <Image
                 source={{
                       uri: data?.photo?.images?.medium?.url?
                             data?.photo?.images?.medium?.url
                           :'https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_960_720.jpg'}
                 }
                 className ='w-full h-72 object-cover rounded-2xl' />
                 <View className=' absolute flex-row  inset-x-0 top-5 justify-between px-6'>
                    <TouchableOpacity className='w-10 h-10 rounded-md items-center justify-center bg-white'>
                     <ChevronLeftIcon name='ChevronLeft'  size={24} color={'#38a7b8'} />
                    </TouchableOpacity>
                    <TouchableOpacity className='w-10 h-10 rounded-md items-center justify-center bg-[#38a7b8]'>
                    <HeartIcon name='Heart'  size={24} color={'white'} />
                    </TouchableOpacity>
                 </View>
                 <View className=' absolute flex-row  inset-x-0 bottom-5 justify-between px-6'>


                    <View className='flex-row items-center justify-center space-x-2'>
                      <Text className='text-[10px] font-semibold text-gray-100'>{data?.price_level}</Text>
                      <Text className='text-[16px] font-semibold text-gray-100'>{data?.price}</Text>
                    </View>
                    <View className='w-10 h-10 rounded-md items-center justify-center bg-[#1b8a9d]'>
                    <Text className=' font-semibold text-gray-100'>{data?.open_now_text}</Text>
                    </View>
                 </View>
           </View>
                 <View className='mt-6'>
                 <Text className='text-[24px] font-semibold text-[#1b8a9d]'>{data?.name}</Text>
                 <View className='mt-2 flex-row items-center space-x-2'>
                   <MapPinIcon  color="gray" fill="#38a7b8" size={24}/>
                   <Text className='text-[20px] font-bold text-[#475153]'>{data?.location_string}</Text>
                 </View>
                 </View>
                
               <View className='mt-6 flex-row items-center justify-between space-x-1 bg-slate-200/10 '>
                  {data?.rating &&(
                        <View className='flex-row items-center space-x-2 shadow-lg' >
                            <View className='w-12 h-12 bg-pink-100 space-x-2 items-center justify-center  rounded-xl'>
                               <StarIcon  color="gray"  size={24}/>
                            </View>
                          
                            <View className='flex-col'> 
                                <Text className='text-[20px] font-bold text-[#475153]'>{data?.rating}</Text>
                                <Text className='text-[16px]  text-[#475153]'>{'Ratings'}</Text>
                            </View>
                        </View>
                  )}
                    {data?.price_level &&(
                        <View className='flex-row items-center space-x-2 ' >
                            <View className='w-12 h-12 bg-pink-100 space-x-2 items-center justify-center rounded-xl shadow-lg'>
                             < CurrencyDollarIcon color="gray"  size={24}/>
                            </View>
                          
                            <View className='flex-col'> 
                            <Text className='text-[12px]  text-[#475153]'>{data?.price_level}</Text>
                            <Text className='text-[12px]  text-[#475153]'>price level</Text>
                            </View>
                        </View>
                  )}
                  {data?.bearing &&(
                        <View className='flex-row items-center space-x-2' >
                            <View className='w-12 h-12 bg-pink-100 space-x-2 items-center justify-center rounded-xl'>
                            <MapIcon color="gray"  size={24}/>
                            </View>
                    
                            <View className='flex-col'> 
                                <Text className='text-[12px]  text-[#475153]'>{data?.bearing}</Text>
                                <Text className='text-[12px]  text-[#475153]'>bearing</Text>
                            </View>
                        </View>
                  )}
                 </View>
                 
                  
                          
                    <Text className='text-[16px] tracking-wide mt-4 font-semibold text-[#97A6AF]'>
                    {data?.description !== null? data.description :
                                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                         } 
                                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.             
                   </Text> 
                    

                     
               
                   
                    <View className='flex-row gap-2 items-center justify-start flex-wrap bg-slate-400'>
                        {  data?.cuisine?.map((cusi,index)=>{
                            <TouchableOpacity 
                                   key={cusi.key}
                                   className='px-2 py-1 rounded-md bg-emerald-600'
                                   >
                                   <Text>{cusi.name}</Text>
                            </TouchableOpacity>
                        })
                        }
                    </View>         
                  
                  <View className=' space-x-2 mt-8 bg-gray-100 rounded-2xl px-4 py-2'>
                      {data?.phone && (
                        <View className='items-center flex-row space-x-6'> 
                            <PhoneIcon  name='phone' color='#42B288'/>
                            <Text className='text-lg'>{data.phone}</Text>
                        </View>
                      )}
                      {data?.email && (
                        <View className='items-center flex-row space-x-6'> 
                              <InboxIcon  name='phone' color='#42B288'/>
                            <Text className='text-lg'>{data.email}</Text>
                        </View>
                      )}
                       {data?.address && (
                        <View className='items-center flex-row space-x-6'> 
                              <ArrowDownOnSquareIcon name='phone' color='#42B288'/>
                            <Text className='text-lg'>{data.address}</Text>
                        </View>
                      )}
                      <TouchableOpacity
                      className='mt-t py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12'>
                        <Text className='text-3xl font-semibold uppercase tracking-wider
                        text-gray-100'>
                             Book Now
                        </Text>
                      </TouchableOpacity>
                  </View>
               
     </ScrollView>
  </SafeAreaView>
  )
}


