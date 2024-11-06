import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Calendar } from 'react-native-calendars';
import { eachDayOfInterval, format } from 'date-fns';
import { CreateTripContext } from '../../context/CreateTripContext'
import { Ionicons } from '@expo/vector-icons'



export default function SelectDates() {
  const navigation = useNavigation();
  const router = useRouter();
  const [markedDates, setMarkedDates] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const {tripData, setTripData} = useContext(CreateTripContext)


  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  const OnDateSelectionContinue = () => { 
    const totalNumberOfDays = Object.keys(markedDates).length;
    if (totalNumberOfDays < 1) {
      Alert.alert(
        "No dates selected",
        "Please select trip term",
        [
          { text: "Try Again", onPress: () => console.log("Button Pressed") }
        ]
      );
    } else {
      console.log("Number of days:", totalNumberOfDays)
      setTripData({...tripData, startDate: startDate, endDate: endDate, totalNumberOfDays: totalNumberOfDays})
      router.push('/create-trip/select-budget');  
    }
   }

  const onDayPress = (day) => {
    const dateString = day.dateString;
    if (!startDate) {
      setStartDate(dateString);
      setMarkedDates({ [dateString]: { selected: true, selectedColor: '#2F7117' } });
    } else if (!endDate) {
      if (new Date(dateString) < new Date(startDate)) {
        // If the selected date is earlier, reset endDate and update startDate
        setStartDate(dateString);
        setEndDate(dateString);
        setMarkedDates({ [dateString]: { selected: true, selectedColor: '#2F7117' } });
      } else {
        setEndDate(dateString);
        const range = eachDayOfInterval({
          start: new Date(startDate),
          end: new Date(dateString),
        }).map((date) => format(date, 'yyyy-MM-dd'));
        const newMarkedDates = {};
        range.forEach((date) => {
          newMarkedDates[date] = { selected: true, selectedColor: '#2F7117' };
        });
        setMarkedDates(newMarkedDates);
      }
    } else {
      setStartDate(dateString);
      setEndDate(null);
      setMarkedDates({ [dateString]: { selected: true, selectedColor: '#2F7117' } });
    }
  };
  
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
     <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      <Text 
        style={{
          textAlign: 'center',
          fontFamily: 'outfit-bold',
          fontSize: 35,
          marginTop: 25,
        }}
      >
        Travel Dates
      </Text>

      <View style={{ 
        marginTop: 25,
        paddingBottom: 25 
      }}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={markedDates}
          style={{}}
          allowSelectionOutOfRange={true}
          theme={{
            backgroundColor: Colors.WHITE,
            calendarBackground: Colors.WHITE,
            textSectionTitleColor: 'black',
            selectedDayBackgroundColor: Colors.PRIMARY,
            selectedDayTextColor: Colors.WHITE,
            todayTextColor: 'seagreen',
            dayTextColor: 'black',
            textDisabledColor: 'gray',
            dotColor: Colors.PRIMARY,
            selectedDotColor: Colors.WHITE,
            arrowColor: 'seagreen',
            monthTextColor: 'black',
            indicatorColor: 'seagreen',
            textDayFontFamily: 'outfit-medium',
            textMonthFontFamily: 'outfit-bold',
            textDayHeaderFontFamily: 'outfit-bold',
          }}
        />
      </View>
      <TouchableOpacity 
        onPress={OnDateSelectionContinue}
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
  );
}