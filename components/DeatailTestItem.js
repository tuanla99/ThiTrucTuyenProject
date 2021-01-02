import React,{ useState,useEffect } from 'react'
import { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,Image, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
const apiLogin ='http://192.168.1.62:8082/files'

export default class DeatailTestItem extends Component {
  constructor(props){
    super(props) ;
     this.state={
      colorA:'black',
      colorB: 'black',
      colorC:'black',
      colorD:'black',

  }

  }


  render() {
    const {question,countMark} = this.props;
    const{colorA,colorB,colorC,colorD}=this.state;
  const onpress = (questionID,option)=>{

          switch (option){
            case 1 :
              if(colorA == 'black'){
                this.setState({colorA:'red', colorB:'black', colorC:'black', colorD:'black'});
              }

              break ;
            case 2 :
              if(colorB == 'black'){
                this.setState({colorA:'black', colorB:'red', colorC:'black', colorD:'black'});
              }

              break ;
            case 3 :
              if(colorC == 'black'){
                this.setState({colorA:'black', colorB:'black', colorC:'red', colorD:'black'});
              }

              break ;
            case 4 :
              if(colorD == 'black'){
                this.setState({colorA:'black', colorB:'black', colorC:'black', colorD:'red'});
              }

              break ;


          }

           countMark(questionID, option);
        }

    return (

        <View style={styles.container}>
          <Text style={styles.text}>Cau {question.stt}:</Text>
            <View>
            <Text>{question.content}</Text>
            </View>


                    <TouchableOpacity activeOpacity={0.2}  onPress={()=>onpress(question.id,1)} >
                      <View style={styles.option} >
                        <Ionicons name="checkbox-outline" size={30} color={colorA}  />
                        <Text style={{margin:5}}>A:{question.option_a } </Text>
                      </View>
                    </TouchableOpacity>




                    <TouchableOpacity activeOpacity={0.2}  onPress={()=>onpress(question.id,2)} >
                      <View style={styles.option} >
                        <Ionicons name="checkbox-outline" size={30} color={colorB}  ></Ionicons>
                        <Text style={{margin:5}}>B:{question.option_b }</Text>
                      </View>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.2}  onPress={()=>onpress(question.id,3)}  >
                        <View style={styles.option} >
                          {/*<Ionicons name="checkbox-outline" size={30} color={colorC}  ></Ionicons>*/}
                      <   Text style={{margin:5}}>C:{question.option_c }</Text>
                      </View>
                    </TouchableOpacity>



                    <TouchableOpacity activeOpacity={0.2}  onPress={()=>onpress(question.id,4)}  >
                      <View style={styles.option} >
                        <Ionicons name="checkbox-outline" size={30} color={colorD}  ></Ionicons>
                        <Text style={{margin:5}}>D:{question.option_d }</Text>
                    </View>
                    </TouchableOpacity>



        </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    margin:10
  },
  text:{
    fontSize:16
  },
  option:{
    flexDirection:'row',
    margin:5,
  }
});
