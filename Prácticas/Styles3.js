import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe6e9',
  },
  title: {
    color: '#1e272e',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    paddingBottom: 15,
  },
  box: {
    backgroundColor: '#6c5ce7',
    width: '100%',
    height: 100,
    justifyContent: 'flex-end',
  },
  boxImage: {
    backgroundColor: '#a29bfe',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;