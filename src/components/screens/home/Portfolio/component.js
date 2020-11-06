import React from 'react';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/portfolio';
import List from 'list/portfolio';

export default function Portfolio({user}) {
  return (
    <Wrap noScroll titleView={<Header />}>
      <List />
    </Wrap>
  );
}
