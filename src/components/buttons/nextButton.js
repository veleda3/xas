import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import Colors from '../../styles/colors';
import { FontAwesome } from '@expo/vector-icons';

export default class NextButton extends React.Component {
  render() {
    const { icon, handleNextButton } = this.props
    return (
      <TouchableHighlight
      onPress={handleNextButton}
      style={[styles.opacityStyle, styles.button]}
      >
        <FontAwesome name="angle-right" size={40} style={styles.buttonIcon} />
      </TouchableHighlight>
    )
  }
}

NextButton.propTypes = {
  handleNextButton: propTypes.func
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 50,
    height: 50
  },
  buttonIcon: {
    marginRight: -2,
    marginTop: -2,
    color: Colors.white
  },
  opacityStyle: {
    backgroundColor: 'rgba(255,255,255,0.2)'
  }
})
