import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
export default function NotifyItem(props) {
    const {name, lever, time, created_at,onPress} = props 
    return (
        <TouchableOpacity onPress={onPress} >
        <View style={styles.container} >
            
            <View style={styles.content}> 
                <View style={styles.name} >
               
                        <Text style={styles.text1} >De thi: Tich han, dao ham lop 12</Text>
                        
                    <View style={{flexDirection:'row'}} >
                        <Text style={styles.text1}>Mon:   Toan</Text>
                        <Text style={{color:'green', marginLeft:150}}>Vua xong</Text>
                    </View>
                
                </View>
                
                <View style={styles.time}>
                    <Text style={styles.text2}>Thoi gian: 50 phut</Text>
                    <Text style={styles.text2}>30/10/2020</Text>
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
   
    time:{
        marginTop:10,
        flexDirection:'row',
    },
    text1:{
     
        fontWeight:'700',
        fontSize:15,
        marginRight:20
    },
    text2:{
        marginRight:20
    }

})