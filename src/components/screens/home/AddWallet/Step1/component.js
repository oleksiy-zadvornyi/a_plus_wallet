import React from 'react';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/addWallet';
import List from 'list/choiceCrypto';

export default function ChoiceCrypto() {
  return (
    <Wrap noScroll titleView={<Header title={i18n.t('t18')} step={1} />}>
      <List />
    </Wrap>
  );
}
