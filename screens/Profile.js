import React, { Component } from 'react'
import { Text, View,Button,StyleSheet,Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default class Profile extends Component {
    constructor(props){
        super(props) ;
        this.state={
          fullname:'',
          userName: '',
          email:'',
          level:'',
          role:'1',// role =1 : admin , role:2 student
        }
      }

    render() {

        const {navigation} = this.props;
        const logout = async () =>{

            try {

                await AsyncStorage.removeItem('userName');

               navigation.navigate('Login');
              } catch (error) {
                // Error saving data
              }
        }

        return (
            <View style={styles.container}>
                <View style={styles.name}>
                    <Ionicons name="person-circle-outline" size={150} color="#cd5c5c" />
                    <Text style={styles.fullname}>Luong Anh Tuan</Text>
                    <Text style={styles.username}>username: tuanla99</Text>
                </View>
                <View style={styles.contact}>

                    <Ionicons name="mail-outline" size={28}></Ionicons>
                    <Text>tuan.la173445@gmail.com</Text>
                </View>
                <View style={styles.class}>
                    <Text style={{fontWeight:'700',fontSize:14}}>Class: 12</Text>

                </View>
              <View style={styles.buttons}>
                <Button title="Tạo bài thi"   />
              </View >
              <View style={styles.buttons}>
                <Button title="Thêm câu hỏi" onPress={()=> navigation.navigate('AddQuestion')} />
              </View >
                <View style={styles.buttons}>
                    <Button title="Cap nhat thong tin"   />
                </View >
                <View style={styles.buttons}>
                    <Button title="Doi mat khau" />
                </View>
                <View style={styles.buttons}>
                    <Button title="Log out!" onPress={()=> logout()} />
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        alignItems:'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft:16,
        paddingRight:16,

    },
    name:{
        marginTop: 30,
        alignItems:'center',
        justifyContent:'center',
    },
    fullname:{
        textTransform:'uppercase',
        marginBottom:4,
        fontWeight:'700',
        fontSize:20
    },
    username:{

        marginBottom:4,
        fontWeight:'700',
        fontSize:15
    },
    contact:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    class:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:15,
        marginTop: 20,
    },
    buttons:{
    width:200,
    justifyContent:'center',
    textAlign:'center',
    marginBottom:20 ,
    marginLeft:80
    }
})
