import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export const PostAdd = ({ route, navigation }) => {
const [username, setUsername] = useState("muh_emir_ghiff");
const [textInputPost, setTextInputPost] = useState("");
const saveData = async () => {
try {
const response = await fetch('http://10.0.2.2:3000/posts/', {
method: 'POST',
headers: {
Accept: 'application/json',
'Content-Type': 'application/json'
},body: JSON.stringify({
username: 'muh_emir_ghiff',
post: textInputPost
})
});
//const json = await response.json();
//setData(json.data);
} catch (error) {
console.error(error);
} finally {
navigation.navigate('PostList');
}
}
return (
    <SafeAreaView>
<View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate('PostList')}>
             <Image style={styles.button} source={{uri: 'https://img.icons8.com/material-outlined/24/ffffff/back.png' }} />
             </TouchableOpacity>

            <Text style={{color: 'white'}}>Add Post</Text>
</View>

<View style={styles.inputContainer}>
            <TextInput placeholder='What`s on your mind?' style={styles.input} onChangeText={text=> setTextInputPost(text)} value={textInputPost} />
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => saveData()}>
            <Image style={styles.buttonInput} source={{uri: 'https://img.icons8.com/ios-glyphs/32/000000/filled-sent.png' }} />
            </TouchableOpacity>

            <TouchableOpacity>
            <Image style={styles.buttonInput} source={{uri: 'https://img.icons8.com/ios-glyphs/32/000000/marker--v1.png' }} />
            </TouchableOpacity>
            </View>

</SafeAreaView>


            








);
}

const styles = StyleSheet.create({
input: {
height: 60,
},

inputContainer: {
    marginTop:100,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
},

container:{
        backgroundColor: '#171615',
        height: 40,
        
        alignItems: 'center',
        flexDirection: 'row',        

    },
    
    button:{
        width: 24,
        height: 24,
        marginRight: 150,
    },

    buttonContainer:{
        flexDirection: 'row-reverse',
        marginLeft: 20,
    },
    
    buttonInput:{
        width: 32,
        height: 32,
    }

});
