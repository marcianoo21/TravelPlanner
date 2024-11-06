import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard'
import { db, auth } from '../../configs/FirebaseConfig'
import { collection, query, getDocs, where, deleteDoc, doc } from 'firebase/firestore'
import UserTripList from '../../components/MyTrips/UserTripList'
import { useRouter } from 'expo-router'

export default function MyTrip() {

    const [userTrips, setUserTrips] = useState([])
    const user = auth.currentUser
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
      user && GetMyTrips()
    },[user])

    const GetMyTrips = async() => {
      setLoading(true)
      setUserTrips([])
      const q = query(collection(db, 'UserTrips'),
      where('userEmail', '==', user?.email))
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setUserTrips(prev => [...prev, { id: doc.id, ...doc.data() }])
      })
      setLoading(false)
    }

    const handleDeleteTrip = async (tripId) => {
      try {
        await deleteDoc(doc(db, 'UserTrips', tripId))
        setUserTrips(prev => prev.filter(trip => trip.id !== tripId))
      } catch (error) {
        console.error("Error deleting trip:", error)
      }
    }

  return (
    <ScrollView style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: '100%',
    }}>
      <View style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
      }}>
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 35,
          }}>My Trips</Text>
          <TouchableOpacity onPress={() => router.push('/create-trip/search-place')}>
            <Ionicons name='add-circle' size={48} color={Colors.PRIMARY} />
          </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator size='large' color={Colors.PRIMARY} />}

      {userTrips?.length == 0?
        <StartNewTripCard />
        :
        <UserTripList userTrips={userTrips} onDeleteTrip={handleDeleteTrip}/>
      }
      <View style={{
        paddingBottom: 75,
      }}>

      </View>
    </ScrollView>
  )
}