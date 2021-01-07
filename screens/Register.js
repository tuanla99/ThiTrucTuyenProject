import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {BASE_URL} from '../Constants'
import axios from 'axios'
const apiRegister =BASE_URL+'/api/project3/user/register'

export default class Register extends Component {
    constructor(props){
        super(props) ;
        this.state={
          tenTK:'',
          hoTen: '',
          email:'',
          ngaySinh:'',
          trinhDo:'',
          password:'',
          role:'1'
        }
      }
    register = ()=>{
        const {tenTK,hoTen,email,ngaySinh,trinhDo,password,role} = this.state ;
        axios.post(apiRegister, {
            tenTK: tenTK,
            hoTen: hoTen,
            email:email,
            ngaySinh:ngaySinh,
            trinhDo:trinhDo,
            password:password,
            role:role
        })
        .then(function (response) {
            if(response == 'true'){
                Alert.alert('Thong bao','Dang ki thanh cong');
                this._storeData().then(
                    this.props.navigation.navigate('Home')
                )
            }else{
                Alert.alert('Thong bao','Hay thu lai voi ten tai khoan hoac email khac');
            }
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    }
     _storeData = async () => {
        try {
            await AsyncStorage.setItem('userName',tenTK);
        } catch (error) {
            // Error saving data
        }
    };
    render() {

       const {navigation} = this.props;

      const {tenTK,hoTen,email,ngaySinh,trinhDo,password,role} = this.state ;



        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.container}>
              <View style={styles.up}>
                <Ionicons name="flower-outline" size={60} color={'#cd5c5c'} ></Ionicons>
                <Text style={styles.title} >Online Exams</Text>
              </View>
              <View style={styles.down}>
                <View style={styles.textInputContainer} >
                  <TextInput style={styles.textInput}   placeholder='Enter your Fullname' onChangeText={(fullname)=>this.setState({hoTen:fullname})} >
                  </TextInput>
                  </View>

                  <View style={styles.textInputContainer} >
                  <TextInput style={styles.textInput}   placeholder='Enter your Username' onChangeText={(userName)=>this.setState({tenTK:userName})} >
                  </TextInput>
                  </View>

                  <View style={styles.textInputContainer} >
                  <TextInput style={styles.textInput} textContentType='emailAddress'  placeholder='Enter your Email' onChangeText={(email)=>this.setState({email:email})} >
                  </TextInput>
                  </View>

                  <View style={styles.textInputContainer} >
                  <TextInput style={styles.textInput}   placeholder='Enter your class' onChangeText={(level)=>this.setState({trinhDo:level})} >
                  </TextInput>
                  </View>

                <View style={styles.textInputContainer} >
                  <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Enter your password'onChangeText={(pass)=>this.setState({password:pass})} >
                  </TextInput>
                  </View>

                  <TouchableOpacity style={styles.loginButton} onPress={()=> register() }>
                    <Text style={styles.loginButtonTitle}>
                      Register
                    </Text>
                  </TouchableOpacity>

                  <View style={{marginTop:30}}>
                    <FontAwesome.Button  style={styles.registerButton} onPress={()=> navigation.navigate("Login")} >
                    <Text style={{fontWeight:'bold',fontSize:16}} >Or Login?</Text>
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

