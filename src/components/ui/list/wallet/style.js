import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    paddingTop: dw(31),
  },
  w2: {
    height: dw(4),
  },
  w3: {
    marginVertical: dw(8),
  },
  w4: {
    paddingTop: dw(20),
    alignItems: 'center',
  },
  t1: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: dw(14),
    lineHeight: dw(21),
    color: 'rgba(255,255,255,0.6)',
  },
});

export default {base};
