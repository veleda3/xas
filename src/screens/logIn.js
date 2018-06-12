import React from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import propTypes from 'prop-types';
import Colors from '../styles/colors';
import { FontAwesome } from '@expo/vector-icons';
import InputField from '../components/forms/inputField'


export default class LogIn extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.scrollViewContainer}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.logInHeader}>Log In</Text>
            <InputField
            labelText="Email Address"
            textSize={14}
            textColor={Colors.white} />
            <InputField
            labelText="Password"
            textSize={14}
            textColor={Colors.white} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.facebookBlue,
  },
  scrollViewContainer: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  logInHeader: {
    fontSize: 20,
    fontWeight: '300',
    color: Colors.white,
    marginBottom: 30
  }
})
