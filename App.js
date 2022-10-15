
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { useState } from 'react';
import StartGameScreen from './screen/StartGameScreen'
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screen/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screen/GameOverScreen'
const App =()=> {
  
  const [userNumber,setUserNumber] =useState();
  const [gameIsOver,setGameIsOver] = useState(false);
  const [guessRounds,setGuessRounds] = useState(0);
  function pickedNumberHandler (pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler (numberOfRounds) {
    console.log("gameOverHandler called")
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }
  function startNewGameHandler () {
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen =<StartGameScreen onPickNumber={pickedNumberHandler}/>;
  if(userNumber){
    console.log(userNumber,"app js usernumber")
      screen =<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  console.log("App ", gameIsOver && userNumber)
  if(gameIsOver && userNumber)
  {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>;
  }
  
  return (
    // <StatusBar style="light">
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
    // </StatusBar>
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
