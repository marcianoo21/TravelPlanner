import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { SelectTravelerList } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import { CreateTripContext } from '../../context/CreateTripContext'


export default function SelectTraveler() {

    const navigation = useNavigation()
    const [selectedTraveler, setSelectedTraveler] = useState()
    const {tripData, setTripData} = useContext(CreateTripContext)


    const router = useRouter()
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
            headerTransparent: true,
        })
    }, [])

    useEffect(() => {
      setTripData({...tripData, travelerCount: selectedTraveler})
    }, [selectedTraveler])


    const onClickContinue = () => {
      if(!selectedTraveler) {
        Alert.alert('No option chosen', 'Select an option to continue')
        return
      }

      router.push('/create-trip/select-dates')
    }

  return (
    <View style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: '100%'
    }}>
      <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      <Text style={{
        marginTop: 25,
        fontSize: 35,
        fontFamily: 'outfit-bold',

      }}>Who's Traveling</Text>

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 21,
        }}>Choose your travelers</Text>

        <FlatList
          data={SelectTravelerList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
             style={{
              marginVertical: 10,
            }}>
              <OptionCard option={item} selectedTraveler={selectedTraveler}/>
            </TouchableOpacity>
          )}
          />

      </View>
      <TouchableOpacity 
        onPress={onClickContinue}
      style={{
        padding: 15, 
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 20
      }}>
        <Text style={{
          textAlign: 'center',
          color: Colors.WHITE,
          fontFamily: 'outfit-medium',
          fontSize: 20,
        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}