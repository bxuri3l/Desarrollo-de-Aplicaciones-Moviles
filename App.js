import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles/styles';

const App = () => {
  return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Hola Mundo!</Text>
    </View>
      <View style={styles.boxImage}>
        <Image
          source = {require('./assets/pitbull.jpg')}
          style = {{width: 200, height: 200, resizeMode: 'contain'}}
        />
      </View>
    </View>
  )
}

export default App;