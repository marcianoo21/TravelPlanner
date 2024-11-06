import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '../../constants/Colors' 
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function UserTripList({userTrips , onDeleteTrip}) {
    const router = useRouter()
    const latestTrip = userTrips.length > 0 ? userTrips[userTrips.length - 1].tripData : null;
    const parsedLatestTrip = typeof latestTrip === "string" ? JSON.parse(latestTrip) : latestTrip;

    
    // console.log(parsedLatestTrip?.startDate)
    // console.log(parsedLatestTrip?.travelerCount?.title)
    // console.log(parsedLatestTrip?.locationInfo?.name)
  return userTrips && (
    <View>
        <View style={{
            marginTop: 20,
        }}>
        {parsedLatestTrip?.locationInfo?.photoRef ? 
        <Image 
        style={{
                    width: '100%',
                    height: 235,
                    objectFit: 'cover',
                    borderRadius: 15,
                }}
        source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+ parsedLatestTrip?.locationInfo?.photoRef +'&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
        }}/> 
        :
            <Image source={require('./../../assets/images/view.jpg')}
                style={{
                    width: '100%',
                    height: 235,
                    objectFit: 'cover',
                    borderRadius: 15,
                }}
            />
            }
           
            <View style={{
                marginTop: 10,
            }}>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20,
                }}>{parsedLatestTrip?.locationInfo?.name}</Text> 
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                }}>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        color: Colors.GRAY,
                    }}>{moment(parsedLatestTrip.startDate).format('DD MMM yyyy')}</Text>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        color: Colors.GRAY,
                    }}>🚐 {parsedLatestTrip?.travelerCount?.title || "Traveler title not available"}</Text>
                </View>
                <TouchableOpacity 
                    onPress={() => router.push({pathname: '/trip-details', params: {
                        trip: JSON.stringify(userTrips[userTrips.length - 1])
                    }})}
                 style={{
                    backgroundColor: Colors.PRIMARY,
                    padding: 15,
                    borderRadius: 15,
                    marginTop: 10,
                }}>
                    <Text style={{
                        color: Colors.WHITE,
                        textAlign: 'center',
                        fontFamily: 'outfit-medium',
                        fontSize: 18,
                    }}>See your plan</Text>
                </TouchableOpacity>
            </View>
            {userTrips.map((trip, index) => (
             <UserTripCard trip={trip} key={index} onDeleteTrip={onDeleteTrip}/>
            ))}
        </View>
    </View>
  )
}