import React from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import propTypes from 'prop-types';
import Colors from '../styles/colors';
import { FontAwesome } from '@expo/vector-icons';
import InputField from '../components/forms/inputField';
import NextButton from '../components/buttons/nextButton';


export default class LogIn extends React.Component {
  handleNextButton() {
    alert('Next Botton pressed')
  }

  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
        <View style={styles.scrollViewContainer}>

          <ScrollView style={styles.scrollView}>
            <Text style={styles.logInHeader}>Log In</Text>
            <InputField
            labelText="Email Address"
            textSize={14}
            textColor={Colors.white}
            textFieldColor={Colors.white}
            inputType="email" />
            <InputField
            labelText="Password"
            textSize={14}
            textColor={Colors.white}
            textFieldColor={Colors.white}
            inputType="password" />
          </ScrollView>
          <View style={styles.nextButton}>
          <NextButton
          handleNextButton={this.handleNextButton} />
          </View>
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
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 30,
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
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20
  }
})
