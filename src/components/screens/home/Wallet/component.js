import React, {useState} from 'react';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/wallet';
import List from 'list/wallet';
import Filter from 'modal/wallet';

export default function Wallet() {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState(0);

  function onPressShow() {
    setShow(true);
  }
  function onPressSelect(index) {
    setFilter(index);
  }
  function onPressClose() {
    setShow(false);
  }

  return (
    <Wrap noScroll titleView={<Header onPressFilter={onPressShow} />}>
      <List filter={filter} />
      <Filter
        isVisible={show}
        index={filter}
        onPressSelect={onPressSelect}
        onPressClose={onPressClose}
      />
    </Wrap>
  );
}
