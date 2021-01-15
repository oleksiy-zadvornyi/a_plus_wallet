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
    alignItems: 'center',
    paddingHorizontal: dw(14),
  },
  w2: {
    flexDirection: 'row',
    paddingVertical: dw(25),
  },
  w3: {
    flex: 1,
    height: dw(54),
  },
  w4: {
    width: dw(6),
  },
  w5: {
    marginBottom: dw(20),
    borderColor: 'grey',
    borderWidth: dw(4),
  },
  w6: {
    marginBottom: dw(25),
  },
  t1: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: dw(14),
    lineHeight: dw(21),
    color: 'white',
    padding: dw(22),
  },
});

export default {base};
