import React from 'react';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/wallet';
import List from 'list/wallet';

export default function Wallet() {
  return (
    <Wrap noScroll titleView={<Header />}>
      <List />
    </Wrap>
  );
}
