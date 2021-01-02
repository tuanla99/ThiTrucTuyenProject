import React, { Component } from 'react'
import { Text, View,StyleSheet,FlatList, Button,SafeAreaView, Alert,BackHandler } from 'react-native'
import CountDown from 'react-native-countdown-component'
import DetailTestItem from '../components/DeatailTestItem'

export default class DetailTest extends Component {
    constructor(props) {
        super(props);
        this.state ={
            testId:'',nameTest:'', leverTest:'',created_at:'',
            questions:[
                {id:1,stt:1 ,content:'All employees must remember that office supplies should not be used for non-work-related _______.',option_a:'purposes',option_b:'purpose',option_c:'purposely', option_d:'purposeful',answer:1},
                {id:2,stt:2 ,content:'At the upcoming conference, the computer technician will speak about the _______ of networking.',option_a:'powerful',option_b:'powerfully',option_c:'powered', option_d:'power',answer:4},
                {id:3,stt:3 ,content:'A complete schedule and _______ instructions for the next staff-development workshop will be delivered to your office by Saturday.',option_a:'register',option_b:'registers',option_c:'registered', option_d:'registered',answer:3}
            ],
            time:60,
            point:0,
            answers:[],
           
        }
        
    }
    backAction = ()=>{
        const {route,navigation} = this.props;
        Alert.alert(
            'Thong bao',
            'Bạn muốn rời đi thi bài thi chưa kết thúc?',
            [
                {text: "Quay lai thi tiep", style: 'cancel', onPress: () => {}},
                {
                   text: 'Nop bai',
                   style: 'destructive',
                   // If the user confirmed, then we dispatch the action we blocked earlier
                   // This will continue the action that had triggered the removal of the screen
                   onPress: () => {
                     //  this.backHandler.remove();
                     BackHandler.exitApp();
                     // navigation.navigate('Finish',{ testId:testId,nameTest:nameTest, leverTest:leverTest, time:time, point:this.state.point, questions:this.state.questions,created_at:created_at });
                 },
               }
            ]
        );
        return true;
    }
    componentDidMount(){
        const {route,navigation} = this.props;
        const {testId,nameTest, leverTest, time,created_at} = route.params;
        console.log(time);
        this.setState({
            testId:testId,
            nameTest:nameTest,
            leverTest:leverTest,
            time:time,
            reated_at:created_at
        });
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
       
    };
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
      }
    
    render() {
        const {route,navigation} = this.props;
        const {questions, time ,point,answers, testId,nameTest, leverTest,created_at} = this.state ;
        
        const selectQuestion = (questionId, option) =>{
          //  Alert.alert('Thong bao',questionId +' '+ option);
          
           let answLen = answers.length ;
          
           if(answLen >0){
               for(let i =0;i<answers.length; i++){
               if(answers[i].questionId == questionId) {
                   var cmpAnswer = answers.slice();
                   cmpAnswer.find(answ => answ.questionId == questionId).option = option ;
                   this.setState({
                       answers: cmpAnswer 
                   })
                    answers[i].option = option ;
                    break ;
               }else{
                   this.setState({
                       answers: answers.concat({questionId:questionId, option:option})
                   })
               
               }
           }
           }
           if(answLen == 0){
            this.setState({
                answers: answers.concat({questionId:questionId, option:option})
            });
           
           };
        //   Alert.alert('Chieu dai answers',' '+ answLen);
           
            
            
        }
       
        const countMark =() =>{
          //  Alert.alert('Thong bao', answers.length+' ');
          let a =0;
          let lenAnswer = answers.length ;
          let lenQuestion = questions.length ; 
         
          console.log(" "+JSON.stringify(answers));
          console.log("len ans :"+lenAnswer+" len qes: "+lenQuestion);
            for(var i=0;i<lenAnswer;i++){
                for(var j=0;j<lenQuestion;j++){
                    
                         if(answers[i].questionId === questions[j].id){
                                   
                                if(answers[i].option === questions[j].answer){
                                    a=a+1;
                                   console.log('question id: '+answers[i].questionId+ " ans : "+answers[i].option + " question ans: "+questions[j].answer);
                                   
                                }
                            }
                }
            }
            a = a* (10/lenQuestion) ;
            this.setState({point:a});
         //   Alert.alert('Ban duoc:',a +' diem');
         Alert.alert(
            'Thong bao',
            'Bạn muốn rời đi thi bài thi chưa kết thúc?',
            [
                {text: "Quay lai thi tiep", style: 'cancel', onPress: () => {}},
                {
                   text: 'Nop bai',
                   style: 'destructive',
                   // If the user confirmed, then we dispatch the action we blocked earlier
                   // This will continue the action that had triggered the removal of the screen
                   onPress: () => {
                     //  this.backHandler.remove();
                   //  BackHandler.exitApp();
                        navigation.navigate('Finish',{ testId:testId,nameTest:nameTest, leverTest:leverTest, time:time, point:point, questions:questions,created_at:created_at });
                        },
               }
            ]
            );
       
        };
        
        
        return (
          
            <View style={styles.container}>
                 
                <SafeAreaView > 
               <Text style={styles.text}>Thoi gian lam bai</Text>
                <CountDown
                    until={time*60}
                    onFinish={() => alert('finished')}
                    onPress={() => alert('hello')}
                    size={20}
                    timeToShow={['H','M', 'S']}
                />
               <Button title='Finish' style={styles.button} onPress={countMark} />
                <FlatList data={questions} 
                renderItem={({item}) =>
                
                <DetailTestItem question ={item} countMark={(questionId,option) => selectQuestion(questionId,option)} />} 

                keyExtractor={(item) => `${item.id}`}
               />
                </SafeAreaView>
            </View>
            
        )
    }
}
const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        margin:5,
        textAlign:"center",
        fontWeight:'bold'
    }
})
