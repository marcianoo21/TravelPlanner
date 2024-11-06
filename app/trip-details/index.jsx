import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import moment from 'moment'
import FlightInfo from '../../components/TripDetails/FlightInfo'
import HotelList from '../../components/TripDetails/HotelList'
import PlannedTrip from '../../components/TripDetails/PlanTrip'
export default function TripDetails() {

    const navigation = useNavigation()
    const { trip } = useLocalSearchParams()
    const [tripDetails, setTripDetails] = useState([])

    const parsedTrip = JSON.parse(trip)
    console.log("hotels", parsedTrip?.tripPlan?.day_plans)
    // console.log("price", parsedTrip?.tripPlan?.flight_details?.flight_info[0].price)

    // console.log("Photo ref:", JSON.parse(parsedTrip?.tripData)?.locationInfo?.photoRef)
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
            headerTransparent: true,
            headerTitle: '',
        })

        setTripDetails(JSON.parse(trip))
        console.log("Trip Details:", JSON.parse(trip))
    }, [])  
  return parsedTrip && (
    <ScrollView>
         <Image 
        style={{
            width: '100%',
            height: 300,
            objectFit: 'cover',            
          }}
         source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+ JSON.parse(parsedTrip?.tripData)?.locationInfo?.photoRef +'&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
         }}/> 
         <View style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            height: '100%',
            marginTop: -25,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
         }}>
            <Text style={{
                fontSize: 25,
                fontFamily: 'outfit-bold'
            }}>{JSON.parse(parsedTrip?.tripData)?.locationInfo?.name}</Text>
           <View style={{
            dispaly: 'flex',
            flexDirection: 'row',
            gap: 5,
            marginTop: 8
           }}>
               <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18,
                    color: Colors.GRAY,
                }}>{moment(parsedTrip.startDate).format('DD MMM yyyy')}</Text>
                 <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18,
                    color: Colors.GRAY,
                }}>- {moment(parsedTrip.endDate).format('DD MMM yyyy')}</Text>
           </View>
           <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        color: Colors.GRAY,
                    }}>🚐 {JSON.parse(parsedTrip?.tripData).travelerCount?.title || "Traveler title not available"}
            </Text>

            {/* Flight Info */}
            <FlightInfo flightData={parsedTrip?.tripPlan?.flight_details?.flight_info[0]}/>
         {/* Hotels Info */}
            <HotelList hotelData={parsedTrip?.tripPlan?.hotel_details?.hotel_options} />
         {/* Trip Day Planner Info */}
            <PlannedTrip details={parsedTrip?.tripPlan?.day_plans}/>
         </View>

         <View style={{
        paddingBottom: 75,
      }}>

      </View>

    </ScrollView>
  )
}