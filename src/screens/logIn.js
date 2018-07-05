import React from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreator} from 'redux';
import * as actions from '../redux/actions';
import {FontAwesome} from '@expo/vector-icons';
import InputField from '../components/forms/inputField';
import NextButton from '../components/buttons/nextButton';
import Notification from '../components/forms/Notification';
import Loader from '../components/loader';
import Colors from '../styles/colors';
import {transparentHeaderStyle} from '../styles/transparentHeaderStyle';

class LogIn extends React.Component {

  static navigationOptions = ({navigation}) => ({
    headerStyle: transparentHeaderStyle,
    headerTintColor: Colors.white
  })

  constructor(props){
    super(props)
    this.state = {
      formNotValid: true,
      validEmail: false,
      emailAddress: '',
      validPassword: false,
      loadingVisible: false,
      password: ''

    }
    this.handleCloseNotification = this.handleCloseNotification.bind(this)
    this.handleValidEmail = this.handleValidEmail.bind(this)
    this.handleNextButton = this.handleNextButton.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }
  handleNextButton() {
    //simulating a slow server
    this.setState({loadingVisible:true})
    const { password, emailAddress } = this.state
    
    setTimeout(() => {
      if(this.state.validEmail && this.state.validPassword) {
        this.props.LogIn(emailAddress, password)
        this.setState({formNotValid: false, loadingVisible:false})

      } else {
        this.setState({formNotValid: true, loadingVisible:false})

      }

    }, 2000)

  }

  handleCloseNotification() {
    this.setState({formNotValid: false })
  }

  handleValidEmail(email) {
    const emailCheckRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

      if(emailCheckRegex.test(email)) {
        this.setState({emailAddress: email, validEmail: true})
      } else if (!emailCheckRegex.test(email)) {
        this.setState({validEmail: false})
      }
    }

  handlePasswordChange(event) {
    if(!this.state.validPassword) {
      if(event.length > 4) {
        this.setState({password: event, validPassword: true})
      }
    }
    else if(event.length < 5) {
      this.setState({validPassword: false})
    }
  }
  toggleNextButtonState() {
    const {validPassword, validEmail} = this.state
    if(validPassword && validEmail) {
      return true
    }
    return false
  }
  render() {
    const { formNotValid, loadingVisible, validEmail, validPassword } = this.state
    const showNotification = formNotValid ? false : true
    const backgroundColor = formNotValid ? Colors.red : Colors.facebookBlue
    const notificationMarginTop = showNotification ? 10 : 0
    return (
      <KeyboardAvoidingView
      style={[{backgroundColor}, styles.container]}
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
              inputType="email"
              onChangeText={this.handleValidEmail}
              showCheckmark={validEmail}
            />
            <InputField
              labelText="Password"
              textSize={14}
              textColor={Colors.white}
              textFieldColor={Colors.white}
              inputType="password"
              onChangeText={this.handlePasswordChange}
              showCheckmark={validPassword}
             />
          </ScrollView>
            <NextButton
              handleNextButton={this.handleNextButton}
              disable={this.toggleNextButtonState}
            />
          <View style={[styles.NotificationContainer, {marginTop: notificationMarginTop}]}>
            <Notification
              showNotification={formNotValid}
              handleCloseNotification={this.handleCloseNotification}
              type="Error"
              firstLine="It looks like you got the wrong credentials"
              secondLine="Please try again"
            />
          </View>
        </View>
        <Loader
          animationType="fade"
          visible={loadingVisible}
         />
      </KeyboardAvoidingView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
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
  NotificationContainer: {
    position: 'absolute',
    bottom: 0,
  }
})

const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.loggedInStatus
  }
}



export default connect(mapStateToProps, actions)(LogIn)
