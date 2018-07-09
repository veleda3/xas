import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import Colors from '../../styles/colors';
import { FontAwesome } from '@expo/vector-icons';

export default class RoundedButton extends React.Component {


  render() {
    const { text, backgroundColor, color, icon, handleOnPress, authComplete } = this.props;


    return (
      <TouchableHighlight
      style={[{backgroundColor}, styles.container]}
      onPress={handleOnPress}
      >
        <View style={styles.buttonIconWrapper}>
          {icon}
          <Text style={[{color}, styles.buttonText]}>{text}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

RoundedButton.propTypes = {
  text: propTypes.string.isRequired,
  backgroundColor: propTypes.string,
  color: propTypes.string,
  icon: propTypes.object,
  handleOnPress: propTypes.func.isRequired

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.white,
    marginBottom: 15,
    alignItems: 'center'

  },
  buttonIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontSize: 17,
    width: '100%',
    textAlign: 'center',
  }
})
