import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoEditScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput multiline textAlignVertical="top" style={styles.textInput} />
      </View>
      <CircleButton
        name="edit-2"
        onPress={() => {
          Alert.alert('Pressed');
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
});
