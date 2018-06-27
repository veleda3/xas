import React from 'react';
import propTypes from 'prop-types';
import Colors from '../styles/colors';
import {
  Text,
  Modal,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Loader extends React.Component {
  render() {
    const {visible, animationType} = this.props

    return (
      <Modal
      animationType={animationType}
      visible={visible}
      transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.loadingContainer}>
            <Image
            style={styles.loaderImage}
            source={require('../img/loader2.gif')}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

Loader.propTypes = {
  animationType: propTypes.string.isRequired,
  visible: propTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  modalContainer: {
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15
  },
  loadingContainer: {
    width: 90,
    height: 90,
    backgroundColor: Colors.white,
    borderRadius: 15,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -45,
    marginTop: -45
  }
})
