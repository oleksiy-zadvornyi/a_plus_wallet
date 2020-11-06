import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F406D',
    borderRadius: dw(5),
  },
  w2: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '400',
    lineHeight: dw(16),
    color: 'white',
    paddingVertical: dw(16),
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
