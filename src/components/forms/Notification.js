import React from 'react';
import propTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../styles/colors';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Notification extends React.Component {
  render() {
    const {type, firstLine, secondLine} = this.props
    return(
      <View style={styles.container}>
        <View style={styles.notificationContent}>
          <Text style={styles.errorType}>{type}</Text>
          <Text style={styles.errorMessage}>{firstLine}</Text>
          <Text style={styles.errorMessage}>{secondLine}</Text>
        </View>
        <TouchableOpacity style={styles.iconTouch}>
          <FontAwesome name="times" size={20} color={Colors.lightGray} />
        </TouchableOpacity>
      </View>
    )
  }
}

Notification.propTypes = {
  type: propTypes.string,
  firstLine: propTypes.string,
  secondLine: propTypes.string
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
