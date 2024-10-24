import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from 'expo-router' 
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { SelectBudgetOptions } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'

export default function SelectBudget() {
    const navigation = useNavigation()  

    useEffect(() => {navigation.setOptions({
        headerShown: false,
        headerTransparent: true,
        headerTitle: '',
    })}, [])

  return (
    <View style={{
        paddingTop: 50,
        padding: 25,
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
            marginTop: 25,
            textAlign: 'center',
        }}>Select your spending preferences for the trip</Text>

        <FlatList 
            data={SelectBudgetOptions}
            renderItem={({item, index}) => (
                <View>
                    <OptionCard option={item} />
                </View>
            )}
        />
      </View>
    </View>
  )
}