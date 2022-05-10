import { Image,StyleSheet, Text, View, Alert,  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

const MyProfile = () =>
{
   return (
    <View style={styles.profile}>
    <View style={styles.profileimage}>
    <Image
            style={styles.Logo}
            source={require('./heeju.jpg')}
          />
    <Text style={{fontSize : 25, fontWeight : "bold" }}>미쥬미쥬미쥬</Text>
    <Text style = {{color : "grey",}}>총 26개의 평가가 있어요</Text>
    <Text>★★★★☆ 4.0/5.0</Text>
     
    </View>
    <View style={styles.profileimagemenu}>
      <View style={styles.profileimagemenuleft}>
      <Text><MaterialIcons  name="segment" size={24} color="black" /> </Text>
      <Text onPress={()=>Alert.alert("Hello")}
         style ={{fontSize : 20, fontWeight : "500",}}>소개 보기</Text>
      </View>
     
      <View style={styles.profileimagemenuright} >
      <Text  ><MaterialCommunityIcons name="message-processing-outline" size={24} color="black" /> </Text>
      <Text onPress={()=> {Alert.alert("평가 확인으로 갑니다")}} style ={{fontSize : 20, fontWeight : "500"}}>평가 확인</Text>
      </View>
     
    </View>
    </View>

);

}

const styles = StyleSheet.create({
    profile:
    {
      flex:3.5,
      backgroundColor : "white",
    },
    profileimage:
    {
      flex: 4.5,
      backgroundColor:"white",
      alignItems : "center",
      justifyContent : "space-between",
      marginLeft : 0,
      marginTop: 10,
      borderRadius : 0,
    },
    Logo:
    {
      width: 100,
      height: 100,
    },
    profileimagemenu:
    {
      flex: 1.5,
      backgroundColor: "white",
      flexDirection: "row",
      margin : 0,
   
    },
    profileimagemenuleft:
    {
      flex :1,
      flexDirection :"row",
      margin : 10,
      backgroundColor : "white",
      justifyContent : "center",
      alignItems : "center",
      borderColor : "#d5ddff",
      borderRadius : 3,
      borderWidth : 0.3,
    },
    profileimagemenuright:
    {
      flex:1,
      flexDirection :"row",
      margin : 10,
      backgroundColor : "white",
      justifyContent : "center",
      alignItems : "center",    
      borderColor : "#d5ddff",
      borderRadius : 3,
      borderWidth : 0.3,
    },
 
})


export default MyProfile;