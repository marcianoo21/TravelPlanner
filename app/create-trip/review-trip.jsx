import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router' 
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { CreateTripContext } from '../../context/CreateTripContext'
import moment from 'moment';


export default function ReviewTrip() {
    const navigation = useNavigation()
    const {tripData, setTripData} = useContext(CreateTripContext)
    const router = useRouter()


    useEffect(() => {
        navigation.setOptions({
            headerShown: false})
    }, [])

  return (
    <View style={{
        paddingTop: 50,
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: '100%',
    }}>
    <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      <Text style={
        {
        marginTop: 25,
        textAlign: 'center',
        fontFamily: 'outfit-bold',
        fontSize: 35,
        }
      }>Review your trip       
      </Text>

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 20,
            textAlign: 'center',
        }}>Please review your trip details before continuing</Text>

        <View style={{
          marginTop: 40,
          flexDirection: 'row',
         
        }}>
          {/* <Ionicons name="location-sharp" size={48} color="black" /> */}
          <Text style={{
            fontSize: 35,
          }}>📍</Text>
          <View style={{
            marginHorizontal: 15,
          }}>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 18,
              color: Colors.GRAY
            }}>Destination</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}>{tripData.locationInfo.name}</Text>
          </View>
        </View>
        <View style={{
          marginTop: 30,
          flexDirection: 'row',
         
        }}>
         <Text style={{
            fontSize: 35,
          }}>📆</Text>
        {/* <Ionicons name="person-sharp" size={44} color="black" />  */}
        <View style={{
            marginHorizontal: 15,
          }}>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 18,
              color: Colors.GRAY
            }}>Selected Dates</Text>
             <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}>{moment(tripData?.startDate).format('DD MMM')+" - "+ moment(tripData?.endDate).format('DD MMM')} ({tripData?.totalNumberOfDays} days)</Text>
          </View>
        </View>
        <View style={{
          marginTop: 30,
          flexDirection: 'row',
         
        }}>
         <Text style={{
            fontSize: 35,
          }}>🚐</Text>
        {/* <Ionicons name="calendar-clear-outline" size={42} color="black" />         */}
        <View style={{
            marginHorizontal: 15,
          }}>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 18,
              color: Colors.GRAY
            }}>Travelers</Text>
           <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}>{tripData?.travelerCount?.title}</Text>
          </View>
        </View>
        <View style={{
          marginTop: 30,
          flexDirection: 'row',
         
        }}>
        <Text style={{
            fontSize: 37,
          }}>💰</Text>
        {/* <Ionicons name="cash-sharp" size={44} color="black" /> */}
        <View style={{
            marginHorizontal: 15,
          }}>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 18,
              color: Colors.GRAY
            }}>Budget</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}>{tripData?.budget.title}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        onPress={() => router.replace('/create-trip/generate-trip')}
      style={{
        padding: 15, 
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 65,
      }}>
        <Text style={{
          textAlign: 'center',
          color: Colors.WHITE,
          fontFamily: 'outfit-medium',
          fontSize: 20,
        }}>Build my trip</Text>
      </TouchableOpacity>
    </View>
  )
}