import React from 'react';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/receive';
import List from 'list/receive';

export default function Receive() {
  return (
    <Wrap noScroll titleView={<Header />}>
      <List />
    </Wrap>
  );
}
