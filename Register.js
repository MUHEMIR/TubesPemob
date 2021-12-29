import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'


   
export const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
        
            <TextInput placeholder="Username" style={styles.formInput} />
            <TextInput placeholder="Password" style={styles.formInput} />
            

            <View styles={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
            <Text style={styles.buttonText}> Register </Text>
            </TouchableOpacity>
            </View>
            </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 14,
    },

    formInput: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
    },

   buttonText: {
       color: 'white',
   },

    
    button: {
        backgroundColor: 'black',
        borderRadius: 15,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        

    }
})
