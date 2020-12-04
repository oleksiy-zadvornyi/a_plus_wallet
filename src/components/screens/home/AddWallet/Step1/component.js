import React from 'react';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/addWallet';
import List from 'list/choiceCrypto';

export default function ChoiceCrypto() {
  return (
    <Wrap noScroll titleView={<Header title="Добавление кошелька" step={1} />}>
      <List />
    </Wrap>
  );
}
