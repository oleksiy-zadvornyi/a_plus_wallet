import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100) - dw(28),
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '400',
    lineHeight: dw(16),
    color: 'white',
    backgroundColor: '#2F406D',
    borderRadius: dw(5),
    paddingVertical: dw(16),
    paddingHorizontal: dw(23),
  },
});

export default {base};
