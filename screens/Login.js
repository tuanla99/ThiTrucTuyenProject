/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{Component,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios' ;


const apiLogin ='http://192.168.1.62:8082/api/project3/user/login'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Login extends Component{
  constructor(props){
    super(props) ;
    this.state={
      userName: '',
      password:'',
      role:''
    }
  }

  render(){
  //
  //  const _storeData = async () => {
  //       try {
  //         await AsyncStorage.setItem('userName',this.state.userName);
  //       } catch (error) {
  //         // Error saving data
  //       }
  //     };
  //
  //
  //   const {navigation} = this.props ;
  //    const login = async() => {
  //
  //
  //       if(!this.state.userName || !this.state.password){
  //           Alert.alert('Thông báo', 'Cần nhập đầy đủ thông tin!');
  //       }else{
  //
  //         let formData = new FormData();
  //         formData.append('username',this.state.userName );
  //         formData.append('password', this.state.password);
  //
  //               fetch(apiLogin,{
  //                   headers: {
  //                     'Content-Type': 'multipart/form-data',
  //                   },
  //                   body: formData,
  //                    method: 'POST',
  //                 }).then((response) =>  response.json())
  //                   .then((json) =>{
  //
  //                     if(json){
  //                       _storeData() ;
  //                         Alert.alert('Thông báo', `Dang nhap thanh cong ! ${json.tenTK}`);
  //                         navigation.navigate("HomeS");
  //                     }else{
  //                       Alert.alert('Thong bao', 'Dang nhap sai');
  //                     }
  //
  //                   })
  //                   .catch((err) => {
  //                     Alert.alert('Thong bao','Loi !!!');
  //
  //                     console.error(err);
  //
  //                   })
  //
  //
  // }

// }
    const {navigation} = this.props ;
         return(

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons name="flower-outline" size={60} color={'#cd5c5c'} ></Ionicons>
            <Text style={styles.title} >Online Exams</Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer} >
              <TextInput style={styles.textInput} textContentType='emailAddress'  placeholder='Enter your UserName' onChangeText={(userName)=>this.setState({userName:userName})} >
              </TextInput>
              </View>

            <View style={styles.textInputContainer} >
              <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Enter your password'onChangeText={(pass)=>this.setState({password:pass})} >
              </TextInput>
              </View>

              <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate('Main') }>
                <Text style={styles.loginButtonTitle}>
                  LOGIN
                </Text>
              </TouchableOpacity>

              <View style={{marginTop:30}}>
                <FontAwesome.Button  style={styles.registerButton} onPress={()=>navigation.navigate('Register')} >
                <Text style={{fontWeight:'bold',fontSize:16}} >Or Register?</Text>
              </FontAwesome.Button>
              </View>
          </View>
        </View>
        </TouchableWithoutFeedback>
      )


  }


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  flexDirection:'column',
  justifyContent:'center',
  alignItems: 'stretch',
  backgroundColor:'#ffffff'
  },
  up:{
    flex:3 ,
    flexDirection:'column',
    backgroundColor:'#ffffff',
    justifyContent:"center",
    alignItems:"center"
  },
  down:{
    flex: 7,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  title:{
    color:'#000000',
    textAlign:'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  textInputContainer:{
    paddingHorizontal:10,
    backgroundColor:'rgba(0,0,0,0)',
   marginBottom: 25,
  },
  textInput:{
    width:330 ,
    height:45,
    borderColor:"gray",
    borderRadius:5,
    borderWidth:0.7,
    backgroundColor:"#f0ffff",

  },
  loginButton:{
    width:330,
    height:45,
    borderRadius:5 ,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00bfff'
  },
  loginButtonTitle:{
    fontSize:18,
    color:'white'
  },
  registerButton:{
    width:330,
    height:45,
    borderRadius:5 ,
    justifyContent:'center',
    alignItems:'center',

  }

});

