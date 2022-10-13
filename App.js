
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import { useState } from 'react';
import StartGameScreen from './screen/StartGameScreen'
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screen/GameScreen';
import Colors from './constants/colors';
const App =()=> {
  
  const [userNumber,setUserNumber] =useState();
  function pickedNumberHandler (pickedNumber) {
    setUserNumber(pickedNumber);
  }

  
  let screen =<StartGameScreen onPickNumber={pickedNumberHandler}/>;
  if(userNumber){
    console.log(userNumber,"app js usernumber")
      screen =<GameScreen userNumber={userNumber}/>
  }
  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary700,Colors.accent500]}>
      <ImageBackground resizeMode ="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      source={require('./assest/background.png')}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
          </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
  
};

export default App;

const styles =StyleSheet.create({
  rootScreen :{
    flex:1
  },
  backgroundImage:{
    opacity:0.15
  }
})
