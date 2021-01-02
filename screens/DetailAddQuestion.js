import React, { Component } from "react";
import {FlatList, StyleSheet, Text, View,TouchableOpacity, Button, Image} from "react-native";
import SubjectItem from "../components/SubjectItem";
import * as ImagePicker from 'expo-image-picker';

class DetailAddQuestion extends Component {
    constructor(props){
        super(props) ;
        this.state={

            localUri: '/assets/icon.png',
            source:''
        };
    }
    options = {
        mediaType:'photo',
        quality:1
    };
     openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
         if (pickerResult.cancelled === true) {
             return;
         }

         this.setState({ localUri: pickerResult.uri });
    }

    render() {
        const {navigation} = this.props;
        const {subjects} = this.state ;
        return (

            <View style={styles.container}  >
                <TouchableOpacity onPress={this.openImagePickerAsync} style={styles.subject}  >
                    <Text style={styles.buttonText} >Select File</Text>
                </TouchableOpacity>

                <Image
                    source={{
                        uri: this.state.localUri,
                    }}
                    style={styles.thumbnail}
                />
            </View>

        )
    }
}

export default DetailAddQuestion;
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
    },
    thumbnail: {
        width: 300,
        height: 200,
        resizeMode: "contain"
    }
})
