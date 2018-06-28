import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import Colors from '../../styles/colors';
import { FontAwesome } from '@expo/vector-icons';

export default class NextButton extends React.Component {
  render() {
    const { disable, icon, handleNextButton } = this.props
    return (
      <View style={styles.nextButtonContainer}>
        <TouchableHighlight
          onPress={handleNextButton}
          style={[styles.opacityStyle, styles.button]}
          disable={disable}
        >
          <FontAwesome name="angle-right" size={40} style={styles.buttonIcon} />
        </TouchableHighlight>
      </View>
    )
  }
}

NextButton.propTypes = {
  handleNextButton: propTypes.func,
  disable: propTypes.func
}

const styles = StyleSheet.create({
  nextButtonContainer: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
  },
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
