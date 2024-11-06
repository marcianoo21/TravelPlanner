import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetPhotoRef } from '../../services/GooglePlaceApi'


export default function HotelCard({ item }) {

    const [photoRef, setPhotoRef] = useState()
    useEffect(() => {
        GetGooglePhotoRef()
    }, [])

const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(item.hotel_name)
    setPhotoRef(result)
    }

  return (
    <View style={{
        marginRight: 20,
        width: 170,
    }}>
        <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}` }}
            style={{
                width: 170, 
                height: 120,
                borderRadius: 15,
            }}
            onError={(error) => console.error("Image load error:", error)}
            />
            <View style={{
                padding: 5,
            }}> 
              <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 16,
                marginTop: 2,
              }}>
                {item.hotel_name}
              </Text>

              <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 2,
              }}>
                <Text style={{
                    fontFamily: 'outfit',
                }}>⭐ {item.rating}</Text>
                <Text style={{
                    fontFamily: 'outfit',
                }}>💰 {item.price}/night</Text>
              </View>

            </View>

         
        </View>
  )
}