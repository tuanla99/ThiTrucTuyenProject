import React, { Component } from 'react'
import { View, Text,StyleSheet,FlatList,BackHandler } from 'react-native';
import SubjectItem from '../components/SubjectItem';


export default class Home extends Component {
    constructor(props){
        super(props) ;
        this.state={
            subjects:[
                {id:1, name :'Toan'},
                {id:2, name :"Ly"},
                {id:3, name :"Hoa"},
                {id:4, name :"Sinh"},
                {id:5, name :"Su"},
                {id:6, name :"Dia"},
            ]
        };
    }

    render() {
        const {navigation} = this.props;
        const {subjects} = this.state ;

        return (

            <View style={styles.container}  >
                <Text style={styles.subject}>Môn Học</Text>

                 <FlatList data={subjects}
                 renderItem={({item}) =>
                  <SubjectItem
                   title = {item.name}
                    onPress={() => navigation.navigate('DetailSubject',{id:item.id,name:item.name, })}
                />}
                 keyExtractor={(item) => `${item.id}`}
                 />

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft:16,
        paddingRight:16,
        marginTop: 12
    },
    subject:{
        fontSize:25,
        textTransform:'uppercase',
        fontWeight:'700',
        paddingBottom: 10,
        marginLeft:100,
        marginTop:20,
    }
})
