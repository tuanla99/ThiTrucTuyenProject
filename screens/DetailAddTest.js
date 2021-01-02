import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView,
    ScrollView,
    Alert, StyleSheet,
} from 'react-native'
import MultiSelect from 'react-native-multiple-select'

const items = [
    {
        id: '92iijs7yta',
        name: 'That’s an interesting name. Is it Chinese / French / Indian, etc.? (Tên của bạn thật thú vị. Đây là tên theo tiếng Trung/ Pháp/ Ấn Độ….vậy?)',
    }, {
        id: 'a0s0a8ssbsd',
        name: 'Who gives you that name? Your father or mother, so on? (Ai đặt tên cho bạn vậy? Bố bạn hay là mẹ?)',
    }, {
        id: '16hbajsabsd',
        name: 'Does this name have any special meaning? (Tên này còn có ý nghĩa đặc biệt nào không?)',
    }, {
        id: 'nahs75a5sg',
        name: 'It’s a pleasure to meet you. Where are you from? (Rất vui khi quen biết bạn. Bạn đến từ đâu vây?)',
    }, {
        id: '667atsas',
        name: 'Where is XYZ? (XYZ là ở đâu vậy?)',
    }, {
        id: 'hsyasajs',
        name: 'What is XYZ like? (XYZ trông như thế nào?)',
    }, {
        id: 'djsjudksjd',
        name: 'Benue',
    }, {
        id: 'sdhyaysdj',
        name: 'Kaduna',
    }, {
        id: 'suudydjsjd',
        name: 'Abuja',
    },
]

class DetailAddTest extends Component {
    constructor (props) {
        super(props)
        this.state = {
            intro: '',
            level: '',
            name: '',
            subject: '',
            time: -1,
            status: -1,
            selectedItems: [],
        }
    }

    onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems })

    }
    submitTests =()=>{
        console.log(this.state.selectedItems)
        Alert.alert('Thong bao', 'Dang thanh cong') ;
    }
    render () {
        const { navigation, route } = this.props
        const { id, name } = route.params
        const { selectedItems } = this.state
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


                <SafeAreaView style={styles.container}>
                    <ScrollView nestedScrollEnabled={true}>
                        <Text>Bài thi môn: {name}</Text>
                        <View>
                            <Text style={styles.text}>Tên bài thi</Text>
                            <TextInput
                                value={this.state.name}
                                onChangeText={text => this.setState(
                                    { name: text })}
                                multiline
                                numberOfLines={2}
                                editable
                                maxLength={1000}
                                style={styles.textInput}
                            />
                        </View>
                        <View>
                            <Text style={styles.text}>Trình độ</Text>
                            <TextInput
                                value={this.state.level}
                                onChangeText={text => this.setState(
                                    { level: text })}
                                multiline
                                numberOfLines={2}
                                editable
                                maxLength={1000}
                                style={styles.textInput}
                            />
                        </View>
                        <View>
                            <Text style={styles.text}>Giới thiệu</Text>
                            <TextInput
                                value={this.state.intro}
                                onChangeText={text => this.setState(
                                    { intro: text })}
                                multiline
                                numberOfLines={2}
                                editable
                                maxLength={1000}
                                style={styles.textInput}
                            />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <Text style={styles.text}>Thời gan làm
                                bài(phút)</Text>
                            <TextInput
                                value={this.state.time}
                                onChangeText={text => this.setState(
                                    { time: text })}
                                maxLength={3}
                                style={styles.textInput}
                                keyboardType='numeric'
                            />
                        </View>
                        <Button
                            title="Chọn câu hỏi"
                            color="#f194ff"
                        />


                        <View style={styles.multiSelectContainer} >

                            <MultiSelect
                                items={items}
                                uniqueKey='id'
                                onSelectedItemsChange={this.onSelectedItemsChange}
                                selectedItems={selectedItems}
                                selectText='Chọn câu hỏi'
                                searchInputPlaceholderText='Search Items...'
                                onChangeInput={(text) => console.log(text)}
                                tagRemoveIconColor='#CCC'
                                tagBorderColor='#CCC'
                                tagTextColor='#CCC'
                                tagContainerStyle={styles.tagContainerStyle}
                                selectedItemTextColor='#CCC'
                                selectedItemIconColor='#CCC'
                                itemTextColor='#000'
                                displayKey='name'
                                searchInputStyle={{ color: '#CCC' }}
                                submitButtonColor='#CCC'
                                submitButtonText='Submit'
                                filterMethod='full'
                                flatListProps={{ nestedScrollEnabled: true }}
                            />

                        </View>
                        <Button
                            title="Đăng bài thi"
                            color="#f194ff"
                            onPress={this.submitTests}
                            style={{paddingBottom:20}}
                        />
                    </ScrollView>

                </SafeAreaView>

            </TouchableWithoutFeedback>
        )
    }
}

export default DetailAddTest
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textInput: {
        borderBottomWidth: 1,
        width: 300,
    },
    text: {
        marginTop: 30,
        marginLeft: 10,
    },
    multiSelectContainer: {
        width: '100%',
    },
    tagContainerStyle: {
        width: '100%',
    },
})
