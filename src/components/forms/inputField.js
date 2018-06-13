import React from 'react';
import Colors from '../../styles/colors';
import { FontAwesome } from '@expo/vector-icons';
import propTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default class InputField extends React.Component {
  render() {
    const { labelText, textSize, textColor, textFieldColor, borderBottomColor, inputType } = this.props
    const fontSize = textSize || 14;
    const color = textColor
    const borderColor = borderBottomColor || 'transparent'
    return (
      <View style={styles.container}>
        <Text style={[{color, fontSize}, styles.textInput]}>{labelText}</Text>
        <TextInput
        autoCorrect={false}
        style={[{borderColor, color: textFieldColor}, styles.textField]}
        secureTextEntry={inputType === "password"} />
      </View>
    )
  }
}

InputField.propTypes = {
  labelText: propTypes.string.isRequired,
  textSize: propTypes.number,
  textFieldColor: propTypes.string,
  borderBottomColor: propTypes.string,
  inputType: propTypes.string.isRequired

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginBottom: 30
  },
  textInput: {
    fontWeight: '700',
    marginBottom: 10
  },
  textField: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: Colors.white
  }
})
