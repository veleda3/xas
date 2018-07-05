import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Colors from '../styles/colors';
import RoundedButton from '../components/buttons/roundedButton';
import { FontAwesome } from '@expo/vector-icons';

export default class LoggedOut extends Component {

  static navigationOptions = {
    header: null
  }
  onFacebookPress() {
    alert('facebook button pressed')
  }

  onCreateAccount() {
    alert('create account button pressed')
  }

  onGooglePress() {
    alert('Google button pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image source={require('../img/logo2.png')}
          style={styles.logo}
          />
          <Text style={styles.welcomeText}> Welcome to Xas eats</Text>
          <RoundedButton
          text="Continue with Facebook"
          backgroundColor={Colors.white}
          color={Colors.facebookBlue}
          icon={<FontAwesome name="facebook" size={20} style={styles.buttonIcon} />}
          handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
          text="Continue with Google"
          backgroundColor={Colors.white}
          color={Colors.red}
          icon={<FontAwesome name="google" size={20} style={styles.buttonIcon} />}
          handleOnPress={this.onGooglePress}
          />
          <RoundedButton
          text="Create a new account"
          backgroundColor={Colors.white}
          color={Colors.green01}
          handleOnPress={this.onCreateAccount}
          />
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By tapping Continue, or create account
          </Text>
          <Text style={styles.termsText}> options, </Text>
          <Text style={styles.termsText}>I agree to Xas </Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Terms of Service</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>, </Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Payments Terms of Service</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>, </Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Privacy Policy</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>, and </Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Nondiscrimination Policy</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.facebookBlue,
    display: 'flex',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 30,
  },
  welcomeContainer: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20
  },
  welcomeText: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: '300',
    marginBottom: 50
  },
  buttonIcon: {
    color: Colors.facebookBlue,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
  termsContainer: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    padding: 5,

  },
  termsText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  }
});
