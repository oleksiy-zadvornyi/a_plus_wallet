import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
    width: wp(100),
    fontFamily: 'Roboto',
    fontSize: dw(18),
    fontWeight: '400',
    lineHeight: dw(21),
    color: '#7A7A7A',
    padding: dw(21),
    marginTop: dw(20),
  },
});

export default {base};
