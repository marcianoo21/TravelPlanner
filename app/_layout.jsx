import { Stack } from "expo-router";
import { useFonts } from 'expo-font'
import { useContext, useState } from 'react'
import { CreateTripContext } from '@/context/CreateTripContext'
 
export default function RootLayout() {

  useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  })

  const [tripData, setTripData] = useState([])
  return (
    <CreateTripContext.Provider value={{tripData, setTripData}}>
    <Stack screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen name="index" options={{headerShown: false}}/> */}
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
    </CreateTripContext.Provider>
  );
}
