import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function HistoryItem(props) {
    const { subject, onPress } = props ;
    return (
     
        <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
        <View style={styles.container}>
    <Text style={styles.subject}>{subject}</Text>        
        </View>
         </TouchableOpacity>
         
    )
}
const styles = StyleSheet.create({
    container :{
        alignItems:'center',
        padding: 10,
        borderRadius:4,
        backgroundColor: '#fff',
        elevation: 8,
        margin: 10
    },
    subject:{
        textTransform:'uppercase',
        marginBottom:4,
        fontWeight:'700',
        fontSize:18
    },
   
})