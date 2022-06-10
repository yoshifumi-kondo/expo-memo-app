import { StyleSheet, Text, View } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {children}
        {bang && '!'}
      </Text>
    </View>
  );
}

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 20,
    padding: 16,
    fontWeight: 'bold',
  },
});

export default Hello;
