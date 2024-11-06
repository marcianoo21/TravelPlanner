import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
import { useNavigation, useRouter } from 'expo-router' 
import React, { useEffect, useState, useContext } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { SelectBudgetOptions } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import { CreateTripContext } from '../../context/CreateTripContext'


export default function SelectBudget() {
    const navigation = useNavigation()  
    const [selectedOption, setSelectedOption] = useState()
    const {tripData, setTripData} = useContext(CreateTripContext)
    const router = useRouter()


    useEffect(() => {navigation.setOptions({
        headerShown: false,
        headerTransparent: true,
        headerTitle: '',
    })}, [])

    useEffect(() => {
      setTripData({...tripData, budget: selectedOption})
    }, [selectedOption])


    const onClickContinue = () => {
      if(!selectedOption) {
        Alert.alert('No budget chosen', 'Select a budget option to continue')
        return
      }

      router.push('/create-trip/review-trip')
    }
    
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
      }>Budget       
      </Text>

      <View>
        <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 18,
            marginTop: 20,
            marginBottom: 5,
            textAlign: 'center',
        }}>Select your spending preferences for the trip</Text>

        <FlatList 
            data={SelectBudgetOptions}
            renderItem={({item, index}) => (
                <TouchableOpacity style={{marginVertical: 10}}
                onPress={() => setSelectedOption(item)}>
                    <OptionCard option={item} selectedBudget={selectedOption}/>
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