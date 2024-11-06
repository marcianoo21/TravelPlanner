import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { GetPhotoRef } from '../../services/GooglePlaceApi'


export default function PlaceCard({ place, locationUrl }) {

    const [photoRef, setPhotoRef] = useState()
    useEffect(() => {
        GetGooglePhotoRef()
    }, [])
    console.log('latitude:', place.location.geo_coordinates.latitude)
    console.log('longitude:', place.location.geo_coordinates.longitude)


const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(place?.location?.place_name)
    setPhotoRef(result)
    }

    const openMap = (latitude, longitude) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        Linking.openURL(url).catch(err => console.error("Failed to open Google Maps", err));
      };
      

  return (
    <View style={{       
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        marginTop: 20,
        borderColor: Colors.LIGHT_GRAY,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
           }}>
      <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`}} style={{
        width: 'auto',
        height: 150,
        borderRadius: 15,
      }} />
        <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 18,
        }}>{place?.location?.place_name}</Text>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 14,
          color: Colors.GRAY,
        }}>
          {place?.location?.place_details}
        </Text>

       <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
       }}>
         <View style={{
            width: '90%'
         }}>
           <Text style={{
             fontFamily: 'outfit',
             fontSize: 15,
           }}>Ticket price: {place?.location?.ticket_pricing} </Text>
           <Text style={{
             fontFamily: 'outfit',
             fontSize: 15,
           }}>Time to travel: {place?.location?.time_to_travel} </Text>
         </View>
         <TouchableOpacity   onPress={() => openMap(place.location.geo_coordinates.latitude, place.location.geo_coordinates.longitude)} style={{
            backgroundColor: Colors.PRIMARY,
            padding: 7,
            borderRadius: 7,
         }}>
          <Ionicons name="navigate" size={20} color="white" />
         </TouchableOpacity>
       </View>

      </View>
  )
}