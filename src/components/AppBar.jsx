import { StyleSheet, Text, View } from 'react-native';

function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTilte}>Memo App</Text>
        <Text style={styles.appbarRight}>Log Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467fd3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 8,
    color: 'rgba(255,255,255,.8)',
  },
  appbarTilte: {
    color: 'white',
    marginBottom: 8,
    fontSize: 24,
  },
});

export default AppBar;
