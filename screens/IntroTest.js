import React, { Component,useEffect } from 'react'
import { Text, View,Button,StyleSheet } from 'react-native'

export default class IntroTest extends Component {
    constructor(props){
        super(props) ;
        this.state={
            id:1,
             name :'',
             lever:'',
             time:'',
             created_at:'',
             intro:''
        };
    }
    
    componentDidMount(){
                const {route,navigation} = this.props;
                const{id,name,lever,time,created_at,intro} = route.params;
                     this.setState({
                            id:id,
                            name:name,
                            lever:lever,
                            time:time,
                            created_at:created_at,
                            intro:intro,
                    });
                 };

    render() {
        
        const {route,navigation} = this.props;
        const{id,name,lever,time,created_at,intro} = this.state ;
       // const { itemId, otherParam } = route.params;
        
        return (
            <View style={styles.container} >
                
                <Text style={styles.name} >Ten bai thi: {this.state.name} </Text>
                <Text style={styles.title}>Ngay ra de: {this.state.created_at}</Text>
                <Text style={styles.title}>Bai thi danh cho: {this.state.lever}</Text>
                <Text style={styles.title}>Thoi gian lam bai: {this.state.time}  </Text>
                <Text style={styles.intro1}>Gioi thieu:</Text>
                <Text style={styles.intro2}>{this.state.intro}</Text>
                <Button title="Thi Ngay" onPress={()=>navigation.navigate('DetailTest',{testId:id,nameTest:name, leverTest:lever, time: time,created_at:created_at})} />
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
        intro1:{
            fontWeight:'700',
            fontSize:15,
            marginTop:20,
            marginBottom:15
        },
        intro2:{
            margin:15
        }

    })
