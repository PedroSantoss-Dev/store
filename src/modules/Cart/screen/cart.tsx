import { ShoppingOutlined } from '@ant-design/icons';
import { useState } from 'react';

import { Drawer } from '../../../shared/components/drawer/drawer';
import { Btn } from '../style/cart.style';

export const Cart = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Btn type="primary" onClick={showDrawer}>
        <ShoppingOutlined />
      </Btn>
      <Drawer title="Cart" onClose={onClose} open={open} />
    </>
  );
};
