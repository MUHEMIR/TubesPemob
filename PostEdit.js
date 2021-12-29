import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
export const PostEdit = ({ route, navigation }) => {
const { itemId } = route.params;
const [textInputPost, setTextInputPost] = useState("");
const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
const [username, setUsername] = useState("");
const [postDate, setPostDate] = useState("");
const [postMessage, setPostMessage] = useState("");
const getData = async () => {
try {const response = await fetch('http://10.0.2.2:3000/posts/id/'+itemId);
const json = await response.json();
setData(json.data);
} catch (error) {
console.error(error);
} finally {
setLoading(false);
}
}
const updateData = async () => {
try {
const response = await fetch('http://10.0.2.2:3000/posts/id/'+itemId, {
method: 'PUT',
headers: {
Accept: 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify({
username: 'PEKZJr',
post: textInputPost
})
});
} catch (error) {
console.error(error);
} finally {
navigation.navigate('PostList');
}
}
useEffect(() => {
getData();
}, []);
return (
<View style={{ flex: 1, backgroundColor: '#E2E2E2' }}>

<View style={styles.container}>
    
             <TouchableOpacity onPress={() => navigation.navigate('PostDetail', {itemId})}>
             <Image style={styles.button} source={{uri: 'https://img.icons8.com/material-outlined/24/ffffff/back.png' }} />
             </TouchableOpacity>

            <Text style={{color: 'white'}}>Edit</Text>
        </View>
{
data.map((item) => (
<View style={{backgroundColor: 'white', margin: 4, padding: 4}}>
<View style={{flexDirection:'row'}}>
<View>
<Image source={{uri:'https://img.icons8.com/ios-glyphs/30/000000/user.png'}}
style={{width: 50, height: 50, resizeMode:'contain'}}/>
</View>
<View style={{marginLeft: 10}}>
<Text style={{fontWeight:'bold', color:'black'}}>{item.username}</Text>
<Text>{item.post_date}</Text>
</View>
</View>
<View style={{height: 80}}>
<TextInput placeholder="Changing Your Mind?" style={styles.input} onChangeText={text => setTextInputPost(text)} value={textInputPost} />
</View>

<View style={styles.buttonContainer}>

        <TouchableOpacity onPress={() => updateData()} >
        <Image style={styles.buttonInput} source={{uri: 'https://img.icons8.com/ios-glyphs/32/000000/filled-sent.png' }} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image style={styles.buttonInput} source={{uri: 'https://img.icons8.com/ios-glyphs/32/000000/marker--v1.png' }} />
        </TouchableOpacity>
        </View>
</View>



))}

</View>

);
}
const styles = StyleSheet.create({
input: {
height: 60,
margin: 12,
borderWidth: 1,
padding: 10,
borderRadius:10,
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
