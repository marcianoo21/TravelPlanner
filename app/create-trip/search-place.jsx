import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '../../context/CreateTripContext'
import { Ionicons } from '@expo/vector-icons'

export default function SearchPlace() {

    const navigation = useNavigation()
    const {tripData, setTripData} = useContext(CreateTripContext)
    const router = useRouter()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
            headerTransparent: true,
            headerTitle: 'Search'
        })
    }, [])

    useEffect(() => {
      console.log(tripData)
    }, [tripData])

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
    <View style={{
      justifyContent:'center'
    }}>
      <Text style={
      {
      marginTop: 25,
      textAlign: 'center',
      fontFamily: 'outfit-bold',
      fontSize: 35,
      }
    }>Search Your Place</Text>
    </View>
     
     
       <GooglePlacesAutocomplete
        placeholder='Search place'
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data.description);
          console.log(details?.geometry.location)
          console.log(details?.photos[0]?.photo_reference)
          console.log(details?.url)
          setTripData({
            locationInfo: {
              name: data.description,
              cordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url
            }
          })
          router.push('/create-trip/select-traveler')
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: 'pl',
        }}
        styles={{
          textInputContainer: {
            marginTop: 30,
            borderWidth: 2,
            borderRadius: 5
          },

          textInput: {
            color: 'black',
            fontFamily: 'outfit',
            fontSize: 18,
          }

        }}
         />
    </View>
  )
}