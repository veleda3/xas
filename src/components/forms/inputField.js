import React from 'react';
import Colors from '../../styles/colors';
import { FontAwesome } from '@expo/vector-icons';
import propTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: this.props.inputType === "text" || this.props.inputType === "email" ? false : true,
      scaleCheckmarkValue: new Animated.Value(0)
    }
    this.toggleShowPassword = this.toggleShowPassword.bind(this)
  }

  scaleCheckmark(value) {
    Animated.timing(
      this.state.scaleCheckmarkValue,
      {
        toValue: value,
        duration: 400,
        easing: Easing.easeOutBack
      }

    ).start()
  }

  toggleShowPassword() {
    this.setState({secureInput: !this.state.secureInput})
  }
  render() {
    const { labelText, textSize, textColor, textFieldColor, borderBottomColor, inputType, onChangeText, showCheckmark } = this.props
    const {secureInput, scaleCheckmarkValue} = this.state
    const fontSize = textSize || 14;
    const color = textColor
    const borderColor = borderBottomColor || 'transparent'
    const keyboardType = inputType === 'email' ? 'email-address' : 'default'

    const iconScale = scaleCheckmarkValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1.6, 1]
    })

    const scaleValue = showCheckmark ? 1 : 0
    this.scaleCheckmark(scaleValue)
    return (
      <View style={styles.container}>
        <Text style={[{color, fontSize}, styles.textInput]}>
          {labelText}
        </Text>
        {inputType==="password" ?
         <TouchableOpacity
            style={styles.toggleContainer}
            onPress={this.toggleShowPassword}>
            <Text style={styles.toggleText}>
              {secureInput ? 'show' : 'hide'}
            </Text>
         </TouchableOpacity> : null}
         <Animated.View style={[{transform: [{scale: iconScale}]}, styles.checkmarkContainer]}>
          <FontAwesome name="check" size={20} color={Colors.white} />
         </Animated.View>
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
  showCheckmark: propTypes.bool

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
  },
  checkmarkContainer: {
    position: 'absolute',
    right: 0,
    bottom: 5
  }
})
