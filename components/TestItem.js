import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function TestItem(props) {
    const {name, lever, time, created_at,onPress} = props 
    return (
        <TouchableOpacity onPress={onPress} >
        <View style={styles.container} >
            <View style={styles.icon}>
                <Ionicons name="calculator-outline" size={70}></Ionicons>
            </View>
        
            <View style={styles.content}> 
                <View style={styles.name} >
                <Text style={styles.text1} >{name}</Text>
                <Text style={styles.text1}>Lop: {lever}</Text>
            </View>
                
                <View style={styles.time}>
                    <Text style={styles.text2}>Thoi gian: {time} phut</Text>
                    <Text style={styles.text2}>{created_at}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
        
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        padding: 10,
        borderRadius:4,
        backgroundColor: '#fff',
        elevation: 8,
        margin: 10,
        
    },
    icon:{

    },
    content:{
        
        
    },
    name:{
        
    },
    time:{
        marginTop:10,
        flexDirection:'row',
    },
    text1:{
        textTransform:'uppercase',
        fontWeight:'700',
        fontSize:15,
        marginRight:20
    },
    text2:{
        marginRight:20
    }

})