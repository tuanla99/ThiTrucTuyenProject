import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Alert,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'

class DetailAddQuestion extends Component {
    constructor (props) {
        super(props)
        this.state = {
            localUri: '',
            content: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: -1,
            colorA: '#3498db',
            colorB: '#3498db',
            colorC: '#3498db',
            colorD: '#3498db',
        }
    }

    openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!')
            return
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync()
        console.log(pickerResult)
        if (pickerResult.cancelled === true) {
            return
        }

        this.setState({ localUri: pickerResult.uri })
    }
    takePicture = async () => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync()

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!')
            return
        }

        let pickerResult = await ImagePicker.launchCameraAsync()
        console.log(pickerResult)
        if (pickerResult.cancelled === true) {
            return
        }

        this.setState({ localUri: pickerResult.uri })
    }
    uploadFiles = async () => {

        const {
            localUri,
            content,
            option1,
            option2,
            option3,
            option4,
            answer,
        } = this.state

        let filename = localUri.split('/').pop()

        let match = /\.(\w+)$/.exec(filename)
        let type = match ? `image/${match[1]}` : `image`

        // let formData = new FormData();
        // formData.append('photo', {uri: localUri, name: filename, type});
        //
        // return await fetch('http://example.com/upload.php', {
        //     method: 'POST',
        //     body: formData,
        //     header: {
        //         'content-type': 'multipart/form-data',
        //     },
        // });
    }
    selectOp = (option) => {
        const { colorA, colorB, colorC, colorD, answer } = this.state
        this.setState({ answer: option })
        switch (option) {
            case 1 :
                if (colorA == '#3498db') {
                    this.setState({
                        colorA: 'red',
                        colorB: '#3498db',
                        colorC: '#3498db',
                        colorD: '#3498db',
                    })
                }

                break
            case 2 :
                if (colorB == '#3498db') {
                    this.setState({
                        colorA: '#3498db',
                        colorB: 'red',
                        colorC: '#3498db',
                        colorD: '#3498db',
                    })
                }

                break
            case 3 :
                if (colorC == '#3498db') {
                    this.setState({
                        colorA: '#3498db',
                        colorB: '#3498db',
                        colorC: 'red',
                        colorD: '#3498db',
                    })
                }

                break
            case 4 :
                if (colorD == '#3498db') {
                    this.setState({
                        colorA: '#3498db',
                        colorB: '#3498db',
                        colorC: '#3498db',
                        colorD: 'red',
                    })
                }

                break

        }
    }

    render () {
        const { navigation, route } = this.props
        const { id, name } = route.params
        const { colorA, colorB, colorC, colorD } = this.state
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <ScrollView>


                    <View style={styles.container}>
                        <Text>Môn học: {name}</Text>
                        <Text style={{ marginTop: 20 }}>Nhập câu hỏi</Text>
                        <TextInput
                            value={this.state.content}
                            onChangeText={text => this.setState(
                                { content: text })}
                            multiline
                            numberOfLines={2}
                            editable
                            maxLength={1000}
                            style={styles.textInput}
                        />

                        <TouchableOpacity onPress={this.openImagePickerAsync}
                                          style={styles.button}>
                            <Text style={styles.buttonText}>Pick a photo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.takePicture}
                                          style={styles.button}>
                            <Text style={styles.buttonText}>Or Take a
                                picture</Text>
                        </TouchableOpacity>
                        {this.state.localUri !== '' ? (
                            <Image
                                source={{
                                    uri: this.state.localUri,
                                }}
                                style={styles.thumbnail}
                            />
                        ) : (
                            <Text>Chưa chọn ảnh nào</Text>
                        )}

                        <Text style={{ marginTop: 20 }}>Nhập các phương
                            án:</Text>

                        <View style={styles.option}>
                            <Text style={{ marginRight: 10 }}>A :</Text>
                            <TextInput
                                value={this.state.option1}
                                onChangeText={text => this.setState(
                                    { option1: text })}
                                multiline
                                numberOfLines={1}
                                editable
                                maxLength={1000}
                                style={styles.textInput}
                            />
                        </View>

                        <View style={styles.option}>
                            <Text style={{ marginRight: 10 }}>B :</Text>
                            <TextInput
                                value={this.state.option2}
                                onChangeText={text => this.setState(
                                    { option2: text })}
                                multiline
                                numberOfLines={1}
                                editable
                                maxLength={1000}
                                style={styles.textInput}
                            />
                        </View>

                        <View style={styles.option}>
                            <Text style={{ marginRight: 10 }}>C :</Text>
                            <TextInput
                                value={this.state.option3}
                                onChangeText={text => this.setState(
                                    { option3: text })}
                                multiline
                                numberOfLines={1}
                                editable
                                maxLength={1000}
                                style={styles.textInput}
                            />
                        </View>
                        <View style={styles.option}>
                            <Text style={{ marginRight: 10 }}>D :</Text>
                            <TextInput
                                value={this.state.option4}
                                onChangeText={text => this.setState(
                                    { option4: text })}
                                multiline
                                numberOfLines={1}
                                editable
                                maxLength={1000}
                                style={styles.textInput}
                            />
                        </View>


                        <View>
                            <Text>
                                Chọn phương án đúng
                            </Text>
                            <View>
                                <View style={styles.fixToText}>
                                    <Button
                                        title=" A "
                                        onPress={() => this.selectOp(1)}
                                        color={colorA}
                                    />
                                    <Button
                                        title=" B "
                                        onPress={() => this.selectOp(2)}
                                        color={colorB}
                                    />
                                    <Button
                                        title=" C "
                                        onPress={() => this.selectOp(3)}
                                        color={colorC}
                                    />
                                    <Button
                                        title=" D "
                                        onPress={() => this.selectOp(4)}
                                        color={colorD}
                                    />
                                </View>
                            </View>
                        </View>
                        <Button
                            title="Hoàn thành"
                            color="#f194ff"
                            onPress={this.uploadFiles}
                        />
                    </View>
                </ScrollView>

            </TouchableWithoutFeedback>

        )
    }
}

export default DetailAddQuestion
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,

    },
    subject: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: '700',
        paddingBottom: 10,
        marginLeft: 100,
        marginTop: 20,
    },
    thumbnail: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
    },
    textInput: {
        borderBottomWidth: 1,
        width: 300,
    },
    button: {
        backgroundColor: '#00bfff',
        padding: 10,
        borderRadius: 5,
        width: 250,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    option: {
        flexDirection: 'row',
        margin: 5,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 20,
        marginBottom: 20,
    },
})
