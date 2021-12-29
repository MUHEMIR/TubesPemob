import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';



export const PostDetail = ({ route, navigation }) => {
const { itemId } = route.params;
const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
const [username, setUsername] = useState("");
const [postDate, setPostDate] = useState("");
const [post, setPost] = useState("");
const getData = async () => {
try {
const response = await fetch('http://10.0.2.2:3000/posts/id/'+itemId);
const json = await response.json();
setData(json.data);
} catch (error) {
console.error(error);
} finally {
setLoading(false);
}
}
const deleteData = async () => {
try {
const response = await fetch('http://10.0.2.2:3000/posts/id/'+itemId, {method:
'DELETE'});
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
    
             <TouchableOpacity onPress={() => navigation.navigate('PostList')}>
             <Image style={styles.button} source={{uri: 'https://img.icons8.com/material-outlined/24/ffffff/back.png' }} />
             </TouchableOpacity>

            <Text style={{color: 'white'}}>Post</Text>
        </View>



{
data.map((item) => (
<View style={{backgroundColor: 'white', margin: 4, padding: 4, marginTop: 4}}>
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
<View>
<Text>{item.post}</Text>
<View style={styles.buttonContainer}>

        <TouchableOpacity onPress={() => deleteData()} >
        <Image style={styles.buttonInput} source={{uri: 'https://img.icons8.com/ios-glyphs/32/000000/filled-trash.png' }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PostEdit', {itemId})} >
        <Image style={styles.buttonInput} source={{uri: 'https://img.icons8.com/ios-glyphs/32/000000/edit--v2.png' }} />
        </TouchableOpacity>
</View>

</View>
</View>
))}

</View>
);
}
const deleteData = async () => {
try {
const response = await fetch('http://10.0.2.2:3000/posts/id/'+itemId, {method:
'DELETE'});
} catch (error) {
console.error(error);
} finally {
navigation.navigate('PostList');
}
}

const styles = StyleSheet.create({

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

})