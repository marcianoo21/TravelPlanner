import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'


export default function SelectTraveler() {

    const navigation = useNavigation()



    const router = useRouter()
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
            headerTransparent: true,
        })
    }, [])

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

        <FlatList>
            
        </FlatList>

      </View>
    </View>
  )
}