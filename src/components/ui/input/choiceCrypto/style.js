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
    width: wp(100),
    paddingHorizontal: dw(24),
    backgroundColor: '#313c5c',
    marginBottom: dw(10),
  },
  w2: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '400',
    lineHeight: dw(16),
    color: 'white',
    paddingVertical: dw(18),
    paddingHorizontal: dw(23),
  },
  w3: {
    backgroundColor: '#009F06',
  },
  t1: {
    fontSize: dw(14),
  },
});

export default {base};
