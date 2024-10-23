import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Calendar } from 'react-native-calendars';

export default function SelectDates() {
  const navigation = useNavigation();
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  const onDayPress = (day) => {
    const dateString = day.dateString;
    setMarkedDates((prevMarkedDates) => {
      const newMarkedDates = { ...prevMarkedDates };
      if (newMarkedDates[dateString]) {
        delete newMarkedDates[dateString];
      } else {
        newMarkedDates[dateString] = {
          selected: true,
          selectedColor: '#2F7117',
        };
      }
      return newMarkedDates;
    });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
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

      <View style={{ marginTop: 25 }}>
        <Calendar
        onPress={    console.log(markedDates)     }
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
    </View>
  );
}