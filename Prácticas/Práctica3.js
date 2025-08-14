import { StyleSheet, Text, View, Image } from 'react-native';
import styles from '../Proyecto Final/styles/styles';

const App = () => {
  return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Hola a todos!</Text>
    </View>
      <View style={styles.boxImage}>
        <Image
          source = {require('./assets/YoMero.jpg')}
          style = {{width: 200, height: 200, resizeMode: 'contain'}}
        />
        <View>
        <Text style = {styles.text}>Buenas tardes, Me llamo Uriel Esaú González Martínez soy originario de Quéretaro, 
            me gusta mucho jugar videojuegos en especial los shooters (Mi saga favorita es la de Gears of War), 
            también disfruto de escuchar música (cualquier genero, pero disfruto mucho del Rap y Trap de artistas argentinos),
            tengo dos perros en casa uno es un chihuahua llamado Mollo y el otro es una Pitbull llamada laila,
            me considero una persona muy alegre, me gusta mucho convivir con mis amigos pero así como puedo ser alegre, puedo ser
            muy penoso a la hora de conocer gente y eso sería todo de mi parte. </Text>
            </View>
      </View>
    </View>
  )
}

export default App;