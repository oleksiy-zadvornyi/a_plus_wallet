import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
  },
  w2: {
    flex: 1,
    height: dw(2),
    backgroundColor: '#C4C4C4',
    marginHorizontal: dw(15),
  },
  w3: {
    width: wp(100),
    marginVertical: dw(15),
    paddingHorizontal: dw(15),
  },
  w4: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    margin: dw(10),
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
    paddingHorizontal: dw(10),
  },
  t2: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(18),
    lineHeight: dw(21),
    color: 'white',
  },
  t3: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(16),
    lineHeight: dw(21),
    color: 'white',
    padding: dw(10),
  },
});

export default {base};
