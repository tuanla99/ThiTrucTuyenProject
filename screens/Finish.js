import React, { Component } from 'react'
import { Text, View,Button,StyleSheet ,BackHandler} from 'react-native'

export default class Finish extends Component {
    constructor(props){
        super(props) ;
        
        this.state={
             testId:'',
             nameTest:'', 
             leverTest:'', 
             time: 0,
             point:'',
             questions:'' ,
             created_at:''
        }
        
    }
    
    componentDidMount(){
        const {navigation, route} = this.props;
      
        const { testId,nameTest, leverTest, time, point, questions,created_at } = route.params ;
             this.setState({
            testId:testId,
            nameTest:nameTest,
            leverTest:leverTest,
            time:time,
            point:point,
            questions:questions,
            created_at:created_at
    });
    
    }
    
    render() {
         const {navigation, route} = this.props;
       // const { testId,nameTest, leverTest, time, point, questions,created_at } = route.params ;
        
        return (
            <View style={styles.container} >
                
            <Text style={styles.name} >Ten bai thi: {this.state.nameTest} </Text>
            <Text style={styles.title}>Ngay ra de: {this.state.created_at}</Text>
            <Text style={styles.title}>Bai thi danh cho: {this.state.leverTest}</Text>
            <Text style={styles.title}>Thoi gian lam bai: {this.state.time}  </Text>
            <Text style={styles.diem}>DIEM: {this.state.point} </Text>
           
            <Button title="Tro ve" onPress={()=>navigation.navigate('HomeS')} />
        </View>
        )
    }
}
const  styles=StyleSheet.create({
    container:{
        paddingTop:15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name:{
        fontWeight:'700',
        fontSize:20,
        marginBottom:10
    },
    title:{
        fontWeight:'700',
        fontSize:15,
    },
    diem:{
        fontWeight:'700',
        fontSize:15,
        marginTop:20,
        marginBottom:15,
        color:'red'
    },
   

})
