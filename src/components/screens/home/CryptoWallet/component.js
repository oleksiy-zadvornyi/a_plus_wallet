import React from 'react';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/cryptoWallet';
import List from 'list/cryptoWallet';

export default function CryptoWallet() {
  return (
    <Wrap noScroll titleView={<Header />}>
      <List />
    </Wrap>
  );
}
