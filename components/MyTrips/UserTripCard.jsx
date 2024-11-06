import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function UserTripCard({ trip, onDeleteTrip}) {
    const parsedTrip = typeof trip.tripData === "string" ? JSON.parse(trip.tripData) : trip.tripData;
    console.log("trip", parsedTrip?.locationInfo?.url)
    const locationUrl = parsedTrip?.locationInfo?.url

  return (
        <View style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
        }}>
         <Image 
       style={{
            width: 100,
            height: 100,
            borderRadius: 15,
         }}
        source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+ parsedTrip?.locationInfo?.photoRef +'&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
        }}/> 
         <View>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 18,
                textAlign: 'start',
                width: 180,
            }}>{parsedTrip?.locationInfo?.name}</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 15,
                color: Colors.GRAY,
            }}>{moment(parsedTrip.startDate).format('DD MMM yyyy')}</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 15, 
                color: Colors.GRAY,
            }}>Traveling: {parsedTrip?.travelerCount?.title || "Traveler title not available"}
            </Text>
         </View>
            <TouchableOpacity onPress={() => onDeleteTrip(trip.id)} style={{
                backgroundColor: Colors.LIGHT_GRAY,
                padding: 10,
                borderRadius: 15,
                alignItems: 'end',
            }}>
                <Ionicons name="trash-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
  )
}