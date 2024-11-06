import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { auth } from '../../../configs/FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth' 


const SignIn = () => {
    const navigation = useNavigation()
    const router = useRouter()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const onSignIn = () => {

        if(!email || !password) {
            Alert.alert('Incomplete data', 'Please provide your credentials')
        }

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User:", user)
            router.replace('/mytrip')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("ErrorCode:", errorCode, "ErrorMessage:" , errorMessage)
            if(errorCode == 'auth/invalid-credential') {
                Alert.alert('Invalid data', 'Check your credentials')
            }
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
            }}>Let's Sign You In</Text>
             <Text style={{
                fontFamily: 'outfit',
                fontSize: 30,
                color: Colors.GRAY,
                marginTop: 20
            }}>Welcome Back</Text>
             <Text style={{
                fontFamily: 'outfit',
                fontSize: 30,
                color: Colors.GRAY,
            }}>You've been missed</Text>
            <View style={{
                marginTop: 50
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
                    onChangeText={(input) => setEmail(input)}
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
                    onChangeText={(input) => setPassword(input)}
                    >
                    </TextInput>
            </View>
            <TouchableOpacity onPress={onSignIn} style={{
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
                }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                padding: 17,
                backgroundColor: Colors.WHITE,
                borderRadius: 15,
                marginTop: 20,
                borderWidth: 3,
            }}
                onPress={() => router.replace('../sign-up')}
            >
                <Text
                style={{
                    color: Colors.PRIMARY,
                    textAlign: 'center',
                    fontFamily: 'outfit-medium',
                    fontSize: 18,
                }}>Create Account</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: 'outfit'
    }


})