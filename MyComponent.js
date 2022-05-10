import React from 'react';
import { StyleSheet, Text, View, Alert,  } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 


const MyComponents = () =>
{
    return(
        <View style={styles.top}>
<View style={styles.topleft}>
  <Text style = {styles.toptext}> <MaterialIcons  onPress={()=> {Alert.alert("뒤로 갑니다")}} name="keyboard-arrow-left" size={40} color="grey" /> </Text>
  <Text style = {styles.toptext}> 미쥬미쥬님의 정보 </Text>
  </View>
  <View style={styles.topright}>
  <Text style = {styles.toptext}> <SimpleLineIcons  onPress={()=> {Alert.alert("검색창으로 갑니다")}} name="magnifier" size={26} color="grey" /> </Text>
  <Text style = {styles.toptext}> <Entypo  onPress={()=> {Alert.alert("더보기로 갑니다")}} name="dots-three-vertical" size={26} color="grey" />    </Text>
  </View>
  </View >
    )
}



const styles = StyleSheet.create({
    top:{
        flex: 1.5,
        borderBottomColor: 'skyblue',
        borderBottomWidth: 1,
        backgroundColor : "white",
        flexDirection : "row",    
      },
      topleft:{
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "flex-start",
        backgroundColor : "white"
    
    
      },
      topright: {
        felx : 1,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "flex-end",
        backgroundColor : "white",
    
      },
    
      toptext:{
        marginTop : 50,
        marginLeft : 10,
        fontSize : 20,
        color : "purple",
    
      },

})

export default MyComponents;
