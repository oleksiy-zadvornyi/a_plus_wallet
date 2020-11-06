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
    marginHorizontal: dw(3),
    marginVertical: dw(22),
    paddingHorizontal: dw(15),
    backgroundColor: '#009F06',
  },
  w2: {
    tintColor: 'white',
  },
  t1: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: dw(18),
    fontWeight: '700',
    color: 'white',
  },
});

export default {base};
