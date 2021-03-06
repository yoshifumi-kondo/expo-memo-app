import { func, string } from 'prop-types';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Button(props) {
  const { label, onPress } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel} onPress={onPress}>
        {label}
      </Text>
    </View>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
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
});

export default Button;
