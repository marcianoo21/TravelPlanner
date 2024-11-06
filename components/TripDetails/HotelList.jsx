import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import HotelCard from './HotelCard'

export default function HotelList({ hotelData }) {


  return (
    <View>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 20,
        marginTop: 20,
      }}>🏨 Hotel Recommendation</Text>

        <FlatList 
        style={{
            marginTop: 8,  
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={hotelData}
        renderItem={({item, index}) => (
          console.log("Hotel Data:", item.hotel_name),
       <HotelCard item={item} />

        )}
        keyExtractor={(item, index) => index.toString()}
     />
    </View>
  )
}