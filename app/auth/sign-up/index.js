import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { auth } from '../../../configs/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth' 



const SignUp = () => {
    const navigation = useNavigation()
    const router = useRouter()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [fullName, setFullName] = useState()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const OnCreateAccount = () => {

        if(!email || !password || !fullName) {
           Alert.alert( 'Incomplete data', 'Please enter all details')
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("User:", user)
        router.replace('/mytrip')
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
    });
        } 


  return (
    <SafeAreaView style={{
        backgroundColor: Colors.WHITE
    }}>
    <View style={{
        padding: 25,
        height: '100%',
    }}>
    <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 20,
      }}>Create New Account</Text>

        <View style={{
            marginTop: 50
        }}>
            <Text
                style={{
                    fontFamily: 'outfit'
                }}
            >Full Name</Text>
            <TextInput 
                style={styles.input}
                placeholder='Enter full name' 
                placeholderTextColor={Colors.GRAY}
                onChangeText={(value) => setFullName(value)}
                >
                </TextInput>
        </View>

        <View style={{
            marginTop: 20
        }}>
            <Text
                style={{
                    fontFamily: 'outfit'
                }}
            >Email</Text>
            <TextInput 
                style={styles.input}
                placeholder='Enter email' 
                placeholderTextColor={Colors.GRAY}
                onChangeText={(value) => setEmail(value)}
                >
                </TextInput>
        </View>

        <View style={{
            marginTop: 20
        }}>
            <Text
                style={{
                    fontFamily: 'outfit'
                }}
            >Password</Text>
            <TextInput 
                secureTextEntry={true}
                style={styles.input}
                placeholder='Enter password' 
                placeholderTextColor={Colors.GRAY}
                onChangeText={(value) => setPassword(value)}
                >
                </TextInput>
        </View>
        <TouchableOpacity onPress={OnCreateAccount} style={{
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 50,
        }}>
            <Text
            style={{
                color: Colors.WHITE,
                textAlign: 'center',
                fontFamily: 'outfit-medium',
                fontSize: 18,
            }}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            padding: 17,
            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            marginTop: 20,
            borderWidth: 3,
        }}
            onPress={() => router.replace('../sign-in')}
        >
            <Text
            style={{
                color: Colors.PRIMARY,
                textAlign: 'center',
                fontFamily: 'outfit-medium',
                fontSize: 18,
            }}>Sign In</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: 'outfit'
    }
})