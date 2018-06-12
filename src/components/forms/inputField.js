import React from 'react';
import Colors from '../../styles/colors';
import { FontAwesome } from '@expo/vector-icons';
import propTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default class InputField extends React.Component {
  render() {
    const { labelText, textSize, textColor } = this.props
    const fontSize = textSize || 14;
    const color = textColor
    return (
      <View style={styles.container}>
        <Text style={[{color, fontSize}, styles.textInput]}>{labelText}</Text>
      </View>
    )
  }
}

InputField.propTypes = {
  labelText: propTypes.string.isRequired,
  textSize: propTypes.number,
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  textInput: {
    fontWeight: '700',
    marginBottom: 10
  }
})
