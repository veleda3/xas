import {Dimensions} from 'react-native';

const iPhoneSize = () => {
    phoneSize = Dimensions.get('window').width
    if (phoneSize === 320) {
        return 'small'
    } else if (phoneSize === 414) {
        return 'large'
    } else
        return 'medium'
}

export default iPhoneSize
