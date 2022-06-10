import { StyleSheet, View } from 'react-native';
import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello>I don`t like js style</Hello>
      <Hello style={{ fontSize: 24, backgroundColor: 'red' }}>
        I don`t like js style
      </Hello>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
