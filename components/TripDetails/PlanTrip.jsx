import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import PlaceCard from './PlaceCard';

export default function PlannedTrip({ details }) {
  console.log("Details:", details)
  return (
    <View>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 20,
        marginTop: 20,
      }}>⛺ Planned Trip</Text>

      {details.map((dayDetails, dayIndex) => (
        <View key={dayIndex}>
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 20,
            marginTop: 15,
          }}>{dayDetails?.day}</Text>
          {dayDetails?.plan && dayDetails.plan.map((place, placeIndex) => (
            <PlaceCard place={place}/>
          ))}
        </View>
      ))}
    </View>
  )
}