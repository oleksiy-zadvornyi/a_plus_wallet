import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/portfolio';
import List from 'list/portfolio';

export default function Portfolio() {
  const route = useRoute();
  const [wallet, setWallet] = useState();

  useEffect(() => {
    const props = route.params?.props ?? null;
    if (props) {
      setWallet(props);
    } else {
      setWallet();
    }
  }, [route.params?.props]);

  return (
    <Wrap noScroll titleView={<Header wallet={wallet} />}>
      <List wallet={wallet} />
    </Wrap>
  );
}
