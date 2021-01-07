/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{Component,useEffect} from 'react';
import { AsyncStorage } from 'react-native';
import axios from 'axios' ;
import {BASE_URL} from '../Constants'

const apiLogin =BASE_URL+'/api/project3/user/login'
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
      password:''
    }
  }
login =() =>{
       // this.getStorage();

      if(this.state.password != '' && this.state.phone!=''){

            axios.post(apiLogin, null,{
                params:{
                    username: this.state.userName,
			        password: this.state.password
                }
            }).then((response) => {

                // this.setStorage('user',JSON.stringify(response && response.data && response.data.data))
                //     .then(
                //         this.props.navigation.navigate('Home')
                //     )

                // this.getStorage()
              //  Alert.alert('data',''+response);

              console.log('aaaaa',response);
            }).catch(function (error) {
                console.log(error);
                Alert.alert('Bạn đã đăng nhập sai',' hãy thử lại');
            });

       }else {
        Alert.alert("Thông báo", "Không được bỏ trống.");
      }


    }
    setStorage = async (key,value) => {
		try {
			await AsyncStorage.setItem(
				key,
				value
			);
		//	console.log(key+':',value);
		} catch (error) {
			// Error saving data
		}
	};
	getStorage = async (key) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				// We have data!!
             //   console.log(key+':', value);
                return value ;
			}
		} catch (error) {
			// Error retrieving data
		}
    };
  render(){

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

              <TouchableOpacity style={styles.loginButton} onPress={()=> this.login() }>
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

