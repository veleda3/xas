import React from 'react';
import Colors from '../../styles/colors';
import { FontAwesome } from '@expo/vector-icons';
import propTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: this.props.inputType === "text" || this.props.inputType === "email" ? false : true
    }
    this.toggleShowPassword = this.toggleShowPassword.bind(this)
  }

  toggleShowPassword() {
    this.setState({secureInput: !this.state.secureInput})
  }
  render() {
    const { labelText, textSize, textColor, textFieldColor, borderBottomColor, inputType, onChangeText } = this.props
    const {secureInput} = this.state
    const fontSize = textSize || 14;
    const color = textColor
    const borderColor = borderBottomColor || 'transparent'
    const keyboardType = inputType === 'email' ? 'email-address' : 'default'
    return (
      <View style={styles.container}>
        <Text style={[{color, fontSize}, styles.textInput]}>{labelText}</Text>
        {inputType==="password" ?
         <TouchableOpacity
          style={styles.toggleContainer}
          onPress={this.toggleShowPassword}>
          <Text style={styles.toggleText}>{secureInput ? 'show' : 'hide'}</Text>
         </TouchableOpacity> : null}
        <TextInput
        autoCorrect={false}
        style={[{borderColor, color: textFieldColor}, styles.textField]}
        secureTextEntry={secureInput}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        />
      </View>
    )
  }
}

InputField.propTypes = {
  labelText: propTypes.string.isRequired,
  textSize: propTypes.number,
  textFieldColor: propTypes.string,
  borderBottomColor: propTypes.string,
  inputType: propTypes.string.isRequired,
  onChangeText: propTypes.func,

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
  },
  toggleContainer: {
    position: 'absolute',
    right: 0,
  },
  toggleText: {
    color: Colors.white,
    fontWeight: '700'
  }
})
