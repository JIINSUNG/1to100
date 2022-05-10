import React from 'react';
import { KeyboardAvoidingView,Image,StyleSheet, Text, View, TouchableOpacity, Button, Alert,  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Menu = () =>
{
return (
    <View  style={styles.menubar}>
    <Text style ={{marginLeft : 10, marginTop : 5,}}>
        미쥬미쥬미쥬 님의 활동
    </Text>
    <View style = {styles.menubartop}>
    <View>
    <Feather onPress={()=>Alert.alert("올린 글을 눌렀습니다")} name="box"  size={30} color="skyblue" />
    <Text style={{fontSize : 11, color : "grey",}}>올린 글</Text>
    </View>
    <View>
    <Text> <Ionicons onPress={()=>Alert.alert("도와준 글을 눌렀습니다")} name="hand-left-outline" size={30} color="skyblue"/></Text>
    <Text style={{fontSize : 11, color : "grey",}}>도와준 글</Text>
    </View>
    <View>
    <Text>  <MaterialCommunityIcons onPress={()=>Alert.alert("반지 콜렉션을 눌렀습니다")} name="truck-outline" size={30} color="skyblue" />
    </Text>
    <Text style={{fontSize : 11, color : "grey",}}>반지 콜렉션</Text>
    </View>
     
    <View>
    <Text> <FontAwesome5 onPress={()=>Alert.alert("리뷰 현황을 눌렀습니다")} name="star" size={30} color="skyblue" /></Text>
    <Text style={{fontSize : 11, color : "grey",}}>리뷰 현황</Text>
    </View>
      </View>
     
    <Text style ={{marginLeft : 10,}}>
    최근 활동 이력
    </Text>
    <View style = {styles.menubarbottom}>
        <Text style = {{color : "grey"}}>최근 올린 글이 없어유 ㅠ</Text>
      </View>
     
    </View>
)


}



const styles = StyleSheet.create({
    menubar:{
        flex :3,
        margin : 5,
        borderColor : "grey",
        borderRadius: 20,
        borderWidth : 1,
      },
      menubartop:{
        flex : 1,
        borderTopWidth : 1,
        borderColor : "grey",
        margin : 15,
        flexDirection:"row",
        justifyContent :"space-between",
        alignItems : "center",
      },
      menubarbottom:{
        flex : 1,
        borderTopWidth : 1,
        borderColor : "grey",
        margin : 10,
        alignItems : "center",
        justifyContent : "center",
      },
})

export default Menu;