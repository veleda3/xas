import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../styles/colors';
import RoundedButton from '../components/buttons/roundedButton';
import { FontAwesome } from '@expo/vector-icons';

export default class LoggedOut extends Component {
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
          icon={<FontAwesome name="facebook" size={20} color={Colors.facebookBlue} />}
          />
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
    marginBottom: 40,
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
  }
});
