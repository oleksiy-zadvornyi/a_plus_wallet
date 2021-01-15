import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100) - dw(32),
    fontFamily: 'Roboto',
    fontSize: dw(18),
    fontWeight: '400',
    lineHeight: dw(21),
    color: '#7A7A7A',
    paddingVertical: dw(21),
    paddingHorizontal: dw(5),
    marginTop: dw(20),
    borderBottomColor: '#BAC1CF',
    borderBottomWidth: 1,
  },
});

export default {base};
