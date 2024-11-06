import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
export default function FlightInfo({flightData}) {
  return (
    <View style={{
      marginTop: 20,
      borderWidth: 1,
      backgroundColor: Colors.LIGHT_GRAY,
      borderColor: Colors.LIGHT_GRAY,
      elevation: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      padding: 10,
      borderRadius: 15,
    }}>
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 20,
        }}>✈️ Flights</Text>
    <TouchableOpacity style={{
        backgroundColor: Colors.PRIMARY,
        padding: 8,
        borderRadius: 7,
        marginTop: 7,
        width: 100,
      }}>
        <Text style={{
          textAlign: 'center',
          color: Colors.WHITE,
          fontFamily: 'outfit',
        }}>
          Book Here
        </Text>
      </TouchableOpacity>
    </View>
     
      <Text style={{
         fontFamily: 'outfit',
         fontSize: 18,
         marginTop: 2,
      }}>Airline: <Text style={{
        fontFamily: 'outfit-medium'
      }}>Emirates Airline</Text></Text>
      <Text style={{
         fontFamily: 'outfit',
         fontSize: 18,

      }}>Price: <Text style={{
        fontFamily: 'outfit-medium'
      }}>{flightData?.price}</Text></Text>
     
    </View>
  )
}