import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: dw(5),
    backgroundColor: '#BDBDBD',
  },
  w2: {
    height: dw(54),
  },
  t1: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: dw(18),
    fontWeight: '700',
    color: 'white',
    paddingHorizontal: dw(20),
  },
  t2: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: dw(12),
    color: 'white',
    paddingHorizontal: dw(20),
  },
});

export default {base};
