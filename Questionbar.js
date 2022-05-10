import { KeyboardAvoidingView,StyleSheet, Text, View,Button, Alert,  } from 'react-native';


const Questionbar = () =>
{
    return (
<View style={styles.questionbar}>
  <Text ><Button title="문의하기"  onPress={()=>Alert.alert("문의하기 창으로 넘어갑니다")}></Button></Text>
</View>
    )
}


const styles = StyleSheet.create({
    questionbar:{
        flex:1,
        backgroundColor : "skyblue",
        margin : 25,
        borderRadius : 20,
        alignItems:"center",
        justifyContent:"center",
      },
})

export default Questionbar;