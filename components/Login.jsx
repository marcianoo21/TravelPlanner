import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
        <Image source={require('../assets/images/login.jpg')}
            style={{
                width: '100%',
                height: 500,
            }}
        />
        <View style={styles.container}>
            <Text
            style={{
                fontSize: 28,
                fontFamily: 'outfit-bold',
                textAlign: 'center',
                marginTop: 20,
            }}>
            Plan your trip</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 17,
                width: '80%',
                textAlign: 'center',
                color: Colors.GRAY,
                marginTop: 25,
                
            }}>Discover your next adventure affprtlessly. Personalized  at your fingertips. Travel smarter with AI-driven insights.</Text>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Text style={{color: Colors.WHITE,
                    textAlign: 'center', 
                    fontFamily: 'outfit',
                    fontSize: 17,
                    }}>
                    Sign in With Google
                    </Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        height: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: 8,
        alignItems: 'center',
    },

   buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        padding: 15, 
        width: 300,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '21%'
    }
})