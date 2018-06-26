import React from 'react';
import propTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../styles/colors';
import { View, Text, TouchableOpacity, StyleSheet, Easing, Animated } from 'react-native';

export default class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      positionValue: new Animated.Value(60)
    }
  }

  animateNofication(value) {
    const {positionValue} = this.state
    Animated.timing(
      positionValue,
      {
        toValue: value,
        duration: 400,
        velocity: 3,
        tension: 2,
        friction: 8,
        easing: Easing.easeOutBack
      }
    ).start()
  }
  render() {
    const {type, firstLine, secondLine, handleCloseNotification, showNotification } = this.props
    const {positionValue} = this.state
    showNotification ? this.animateNofication(0) : this.animateNofication(60)
    return(
      <Animated.View style={[{transform: [{translateY: positionValue}]}, styles.container]}>
        <View style={styles.notificationContent}>
          <Text style={styles.errorType}>{type}</Text>
          <Text style={styles.errorMessage}>{firstLine}</Text>
          <Text style={styles.errorMessage}>{secondLine}</Text>
        </View>
        <TouchableOpacity
          onPress={handleCloseNotification}
          style={styles.iconTouch}
        >
          <FontAwesome name="times" size={20} color={Colors.lightGray} />
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

Notification.propTypes = {
  showNotification: propTypes.bool.isRequired,
  type: propTypes.string.isRequired,
  firstLine: propTypes.string,
  secondLine: propTypes.string,
  handleCloseNotification: propTypes.func
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: 60,
    width: '100%',
    padding: 10
  },
  notificationContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  errorType: {
    color: Colors.red,
    fontSize: 14,
    marginRight: 5,
    marginBottom: 2
  },
  errorMessage: {
    marginBottom: 2,
    fontSize: 14
  },
  iconTouch: {
    position: 'absolute',
    right: 10,
    top: 10
  }

})
