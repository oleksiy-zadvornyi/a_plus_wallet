import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    marginVertical: dw(16),
    width: wp(100),
  },
  w2: {
    marginBottom: dw(4),
  },
  w3: {
    borderRadius: 0,
  },
  w4: {
    width: wp(80),
    alignItems: 'center',
    backgroundColor: '#232F4E',
    borderRadius: dw(8),
    padding: dw(16),
  },
  t1: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(16),
    lineHeight: dw(21),
    color: 'white',
    textAlign: 'center',
  },
});

export default {base};
