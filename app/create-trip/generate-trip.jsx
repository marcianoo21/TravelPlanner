import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext'
import { AI_PROMPT } from '../../constants/Options'
import { chatSession } from '../../configs/AiModel'
import { useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from './../../configs/FirebaseConfig'


export default function GenerateTrip() {
    const {tripData, setTripData} = useContext(CreateTripContext)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const user = auth.currentUser

    useEffect(() => {
        tripData && GenerateAiTrip()
    },[])

    const GenerateAiTrip = async() => {
        setLoading(true)
        const FINAL_PROMPT = AI_PROMPT
        .replace('{location}', tripData.locationInfo.name)
        .replace('{totalDays}', tripData?.totalNumberOfDays)
        .replace('{totalNight}', (tripData?.totalNumberOfDays - 1))
        .replace('{budget}', tripData?.budget.title)
        .replace('{traveler}', tripData?.travelerCount?.title)
        .replace('{totalDays}', tripData?.totalNumberOfDays)
        .replace('{totalNight}', (tripData?.totalNumberOfDays - 1)) 

        console.log(FINAL_PROMPT)

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        const tripResp = JSON.parse(result.response.text())

        setLoading(false)

        const docId = (Date.now()).toString()
        const result_ = await setDoc(doc(db, "UserTrips", docId), {
          userEmail: user.email,
          tripPlan: tripResp,
          tripData: JSON.stringify(tripData),
          docId: docId,
        })

      
        router.push('(tabs)/mytrip')
      
    }

  return (
    <View style={{
        paddijnng: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%',
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        textAlign: 'center',
      }}>Please Wait...</Text>
      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 40,
      }}>We are working to generating your trip</Text>
      <Image source={{uri: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNng5NTh6ZXo5MzZycDR1djZlcjZveDM2ajVtdDF2dXJ2dTlsaTVteiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTntbGZeEx42RU7S/giphy.gif'}}
        style={{
            width:'100%',
            height: 200,
            objectFit: 'contain',
            borderRadius: 18,
            marginTop: 5,
        }}
      />
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.GRAY,
      }}>Do not go back</Text>
    </View>
  )
}