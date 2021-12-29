import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, Image, Button, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

export const PostList = ({ navigation }) => {
const [data, setData] = useState([]);
const [username, setUsername] = useState("PEKZJr");
const getData = async () => {
try {
const response = await fetch('http://10.0.2.2:3000/posts');
const json = await response.json();
setData(json.data);
} catch (error) {
console.error(error);
}
}
useEffect(() => {
getData();
}, []);
return (
    <ScrollView>  
    <View style={styles.container}>
    
             <TouchableOpacity onPress={() => navigation.navigate('Login')}>
             <Image style={styles.button} source={{uri: 'https://img.icons8.com/ios-glyphs/24/ffffff/logout-rounded-left.png' }} />
             </TouchableOpacity>

            <Text style={{color: 'white'}}>Timeline</Text>

            <TouchableOpacity onPress={() => navigation.navigate('PostAdd')}>
             <Image style={styles.button} source={{uri: 'https://img.icons8.com/ios-glyphs/24/ffffff/add--v1.png' }} />
             </TouchableOpacity>
        </View>

            
<View style={{ flex: 1, padding: 4, backgroundColor: '#E2E2E2' }}>

            <View style={styles.refresh}>
            <TouchableOpacity onPress={() => getData('')}>
             <Image style={styles.button} source={{uri: 'https://img.icons8.com/ios-glyphs/48/000000/refresh.png' }} />
             </TouchableOpacity>
             </View>
    
{
data.map((item) => (
<TouchableOpacity onPress={() => navigation.navigate('PostDetail',
{itemId:item.post_id})}>
    <View style={{backgroundColor: 'white', margin: 4, padding: 4}}>
    <View style={{flexDirection:'row'}}>
    <View>
<Image source={{uri:'https://img.icons8.com/ios-glyphs/30/000000/user.png'}}
style={{width: 50, height: 50, resizeMode:'contain'}}/>
</View>
<View style={{marginLeft: 10}}>
<Text style={{fontWeight:'bold',
color:'black'}}>{item.username}</Text>
<Text>{item.post_date}</Text>
    </View>
    </View>

<View>
<Text>{item.post}</Text>
</View>
</View>
</TouchableOpacity>
))}
<View style={{flexDirection:'row', justifyContent:'space-evenly'}}>

</View>
</View>
    </ScrollView>
);
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#171615',
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',        

    },
    
    button:{
        
        
        width: 24,
        height: 24,
    },

    refresh: {
        alignItems: 'flex-end',
        marginRight: 45
    }

})