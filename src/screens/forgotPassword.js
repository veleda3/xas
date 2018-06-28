import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';
import Colors from '../styles/colors';
import NextButton from '../components/buttons/nextButton';
import InputField from '../components/forms/inputField';
import Notification from '../components/forms/Notification';
import Loader from '../components/loader'

export default class ForgotPassword extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      formNotValid: false,
      validEmail: false,
      emailAddress: '',
      loadingVisible: false
    }
    this.handleValidEmail = this.handleValidEmail.bind(this)
    this.handleNextButton = this.handleNextButton.bind(this)

  }
  handleValidEmail(email) {
    const emailCheckRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

      if(emailCheckRegex.test(email)) {
        this.setState({emailAddress: email, validEmail: true})
        console.log(this.state.validEmail)
      } else if (!emailCheckRegex.test(email)) {
        this.setState({validEmail: false})
      }
  }

  handleNextButton() {
    //simulating a slow server
    this.setState({loadingVisible:true})
    setTimeout(() => {
      if(this.state.emailAddress === "velez@velezda.com") {
          this.setState({formNotValid: false, loadingVisible:false})

      } else {
          console.log(this.state.formValid)
          this.setState({formNotValid: true, loadingVisible:false})

        }

      }, 2000)
  }

  handleCloseNotification() {
    this.setState({formNotValid: false })
  }

  render() {
    const {validEmail, loadingVisible, formNotValid} = this.state
    const showNotification = formNotValid ? false : true
    const backgroundColor = formNotValid ? Colors.red : Colors.facebookBlue
    const notificationMarginTop = showNotification ? 10 : 0
    return (
      <KeyboardAvoidingView style={[{backgroundColor: backgroundColor}, styles.container]}
      behavior="padding"
      >
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Forgot your Password?</Text>
          <Text style={styles.subHedersText}>Enter your email to find your account</Text>
          <InputField
            labelText="Email Address"
            textSize={14}
            textColor={Colors.white}
            textFieldColor={Colors.white}
            labelText="ENTER EMAIL"
            inputType="email"
            lableTextSize={14}
            onChangeText={this.handleValidEmail}
            showCheckmark={validEmail}
          />
         </View>
         <View style={styles.nextButton}>
          <NextButton
            handleNextButton={this.handleNextButton}
            />
         </View>
         <View style={[styles.NotificationContainer, {marginTop: notificationMarginTop}]}>
           <Notification
             showNotification={formNotValid}
             handleCloseNotification={this.handleCloseNotification}
             type="Error"
             firstLine="It looks like you got the wrong email"
             secondLine="Please try again"
           />
         </View>
         <Loader
         visible={loadingVisible}
         animationType="fade"
          />
       </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  formContainer: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  headerText: {
    fontSize: 28,
    color: Colors.white,
    fontWeight: '300',
  },
  subHedersText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '600',
    paddingBottom: 60,
    marginTop: 20,
    marginBottom: 60
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20
  },
  NotificationContainer: {
    position: 'absolute',
    bottom: 0,
  }
})
