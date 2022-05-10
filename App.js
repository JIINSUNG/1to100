import { StatusBar } from 'expo-status-bar';
import {Platform, KeyboardAvoidingView, SafeAreaView,TextInput,StyleSheet, Text,ScrollView, View, TouchableOpacity, Button, Alert,  } from 'react-native';
import MyComponents from './MyComponent';
import {React,useState} from 'react';
import MyProfile from './MyProfile';
import Menu from './Menu';
import Questionbar from './Questionbar';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFZKZvjRAvwv2AIvyxHHqP95lL0OIyYqA",
  authDomain: "to100-d57e6.firebaseapp.com",
  projectId: "to100-d57e6",
  storageBucket: "to100-d57e6.appspot.com",
  messagingSenderId: "1068221050304",
  appId: "1:1068221050304:web:8fb2c566ff560447c2ec25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

const auth = getAuth();




export default function App() {

  const [islogin,setisLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const Login = ()=> {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    Alert.alert(user.email + "님 로그인 되었습니다");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(errorMessage);
  });
  }

  const Submit = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert(errorMessage);

      // ..
    });

    }
  


  return (
    islogin ? 
    
    <View style = {styles.container}>

    <MyComponents/>


    <View style={styles.profile}>

<SafeAreaView>
<TextInput value={email} onChangeText={setEmail} placeholder="useremail" style={styles.input}/>
<TextInput value={password} onChangeText={setPassword} secureTextEntry={true} placeholder="password" style={styles.input}/>
 <Button title="signup" onPress={Submit}></Button> 
 <Button title="signin" onPress={Login}></Button> 

</SafeAreaView>
</View>

    <Menu/>

    <Questionbar/>
    </View> 


    : 
    <View style={styles.container}>
    <MyComponents/>
    <MyProfile />
    <Menu/>
    <Questionbar/>
    </View> 


  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "white",

  },
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
  profile:
  {
    flex:3.5,
    backgroundColor : "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

 

 
 
 
