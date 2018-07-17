import React, { Component } from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableHighlight, StatusBar } from 'react-native';
import * as actions from '../redux/actions';
import Colors from '../styles/colors';
import RoundedButton from '../components/buttons/roundedButton';
import { FontAwesome } from '@expo/vector-icons';
import NavBarButton from '../components/buttons/navBarButton';
import {transparentHeaderStyle} from '../styles/transparentHeaderStyle';
import iPhoneSize from '../helpers/utils'

const size = iPhoneSize()
let termTextSize = 12
let headingTextSize = 30

if (size === 'small') {
  termTextSize = 10
  headingTextSize = 26
}


class LoggedOut extends Component {

  static navigationOptions = ({navigation}) => ({
    headerRight: <NavBarButton handleButtonPress={()=> navigation.navigate('LogIn')} location="right" text="Log In" color={Colors.white}/>,
    headerStyle: transparentHeaderStyle,
    headerTintColor: Colors.white
  })

  constructor(props) {
    super(props)
    this.onFacebookPress = this.onFacebookPress.bind(this)

  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onFacebookPress() {

    this.props.facebookLogIn()
    this.onAuthComplete(this.props);
  }

  onCreateAccount() {
    alert('create account button pressed')
  }

  onGooglePress() {
    alert('Google button pressed')
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('TurnOnNotifications');
    }
  }

  render() {
    StatusBar.setBarStyle('light-content', true)
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
    fontSize: headingTextSize,
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
    fontSize: termTextSize,
    fontWeight: '600',
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  }
});

const mapStateToProps = ({auth}) => {
  return {token: auth.token}
}

export default connect(mapStateToProps, actions)(LoggedOut)
