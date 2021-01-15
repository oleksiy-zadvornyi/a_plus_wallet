import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100) - dw(28),
    backgroundColor: '#2F406D',
    borderRadius: dw(5),
    paddingVertical: dw(16),
    paddingHorizontal: dw(23),
  },
  w2: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '400',
    lineHeight: dw(16),
    color: 'white',
  },
});

export default {base};
