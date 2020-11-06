import {StyleSheet} from 'react-native';
import dw from 'hooks/useDesignWidth';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flexDirection: 'row',
    height: dw(54),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: dw(5),
    backgroundColor: '#BDBDBD',
    marginHorizontal: dw(15),
    marginVertical: dw(41),
    paddingHorizontal: dw(15),
  },
  t1: {
    fontFamily: 'Roboto',
    fontSize: dw(18),
    fontWeight: '700',
    color: 'black',
  },
});

export default {base};
