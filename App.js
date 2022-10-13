
import {
  StyleSheet,ImageBackground
} from 'react-native';
import StartGameScreen from './screen/StartGameScreen'
import LinearGradient from 'react-native-linear-gradient';

const App =()=> {
  
  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e0329','#ddb52f']}>
      <ImageBackground resizeMode ="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      source={require('./assest/background.png')}>
          <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  )
  
};

export default App;

const styles =StyleSheet.create({
  rootScreen :{
    // backgroundColor:'#ddb52f',
    flex:1
  },
  backgroundImage:{
    opacity:0.15
  }
})
