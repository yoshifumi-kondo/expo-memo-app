// eslint-disable-next-line object-curly-newline
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>Item List</Text>
        <Text style={styles.memoDate}>2022-06-22 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptas voluptatum ex ut iure excepturi accusantium, voluptates atque
          nesciunt molestiae, veniam quasi reprehenderit id fugit illum harum
          nemo a pariatur. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deserunt voluptas voluptatum ex ut iure excepturi accusantium,
          voluptates atque nesciunt molestiae, veniam quasi reprehenderit id
          fugit illum harum nemo a pariatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt voluptas voluptatum ex ut iure
          excepturi accusantium, voluptates atque nesciunt molestiae, veniam
          quasi reprehenderit id fugit illum harum nemo a pariatur.
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160 }} name="edit-2" />
    </View>
  );
}

export default MemoDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  memoTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 16,
  },
  memoDate: {
    color: '#ffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  memoText: {
    fontSize: 12,
  },
});
