import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.innter}>
        <Text style={styles.title}>Login</Text>
        <TextInput value="email" style={styles.input} />
        <TextInput value="password" style={styles.input} />
        <Button label="submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered</Text>
          <Text style={styles.footerLink}>Singn up here!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  innter: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#fff',
  },

  footer: {
    flexDirection: 'row',
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});

export default LoginScreen;
