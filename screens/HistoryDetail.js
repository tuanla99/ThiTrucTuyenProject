import React, { Component } from 'react'
import { Text, View,StyleSheet,FlatList } from 'react-native'
import TestItem from '../components/TestItem'
import HistoryDetailItem from '../components/HistoryDetalItem'

export default class HistoryDetail extends Component {
    constructor(props){
        super(props) ;
        this.state={
            tests:[
                {id:1, name :'Hinh khong gian',lever:'12',time:'50',created_at:'29/10/2020',mark:10,intro:'Đề kiểm tra Hình học 12 chương 3 năm học 2019 – 2020 trường THPT Đoàn Thượng – Hải Dương mã đề 604 gồm 03 trang với 25 câu hỏi và bài toán dạng trắc nghiệm, thời gian làm bài 45 phút (1 tiết học), nội dung kiểm tra thuộc chủ đề phương pháp tọa độ trong không gian Oxyz, đề kiểm tra có đáp án'},
                {id:2, name :'Glucozo',lever:'11',time:'60',created_at:'29/10/2020',mark:8,intro:'Đề kiểm tra Hình học 12 chương 3 năm học 2019 – 2020 trường THPT Đoàn Thượng – Hải Dương mã đề 604 gồm 03 trang với 25 câu hỏi và bài toán dạng trắc nghiệm, thời gian làm bài 45 phút (1 tiết học), nội dung kiểm tra thuộc chủ đề phương pháp tọa độ trong không gian Oxyz, đề kiểm tra có đáp án'},
                {id:3, name :'Con lac lo xo',lever:'10',time:'45',created_at:'29/10/2020',mark:7, intro:'Đề kiểm tra Hình học 12 chương 3 năm học 2019 – 2020 trường THPT Đoàn Thượng – Hải Dương mã đề 604 gồm 03 trang với 25 câu hỏi và bài toán dạng trắc nghiệm, thời gian làm bài 45 phút (1 tiết học), nội dung kiểm tra thuộc chủ đề phương pháp tọa độ trong không gian Oxyz, đề kiểm tra có đáp án'},
                {id:4, name :'Anh xa tuyen tinh',lever:'Dai hoc',time:'50',created_at:'29/10/2020',mark:9,intro:'Đề kiểm tra Hình học 12 chương 3 năm học 2019 – 2020 trường THPT Đoàn Thượng – Hải Dương mã đề 604 gồm 03 trang với 25 câu hỏi và bài toán dạng trắc nghiệm, thời gian làm bài 45 phút (1 tiết học), nội dung kiểm tra thuộc chủ đề phương pháp tọa độ trong không gian Oxyz, đề kiểm tra có đáp án'},
                {id:5, name :'Dien tu truong',lever:'12',time:'60',created_at:'29/10/2020',mark:10,intro:'Đề kiểm tra Hình học 12 chương 3 năm học 2019 – 2020 trường THPT Đoàn Thượng – Hải Dương mã đề 604 gồm 03 trang với 25 câu hỏi và bài toán dạng trắc nghiệm, thời gian làm bài 45 phút (1 tiết học), nội dung kiểm tra thuộc chủ đề phương pháp tọa độ trong không gian Oxyz, đề kiểm tra có đáp án'},
                {id:6, name :'Thuyet tien hoa Darwin',lever:'12',time:'15',created_at:'29/10/2020',mark:9.5,intro:'Đề kiểm tra Hình học 12 chương 3 năm học 2019 – 2020 trường THPT Đoàn Thượng – Hải Dương mã đề 604 gồm 03 trang với 25 câu hỏi và bài toán dạng trắc nghiệm, thời gian làm bài 45 phút (1 tiết học), nội dung kiểm tra thuộc chủ đề phương pháp tọa độ trong không gian Oxyz, đề kiểm tra có đáp án'},
            ]
        };
    }
    render() {
        const {navigation} = this.props;
        const {tests} = this.state ;
        return (
            <View style={styles.container}  >
            
            
             <FlatList data={tests} 
             renderItem={({item}) =>
              <HistoryDetailItem
               name = {item.name}
               lever={item.lever}
               time={item.time}
               mark={item.mark}
               created_at={item.created_at}
                onPress={() => navigation.navigate('IntroTest',{id:item.id,name:item.name,lever:item.lever,time:item.time,created_at:item.created_at,mark:item.mark,intro:item.intro })} 
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
        paddingRight:16
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
