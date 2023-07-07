import { Card } from 'antd';

import { IProduct } from '../types/product.types';

const { Meta } = Card;

const ProductCard = ({ id, title, price, category, description, image }: IProduct) => {
  return (
    <Card
      key={id}
      hoverable
      style={{ width: 230 }}
      cover={
        <img
          style={{ width: '80%', objectFit: 'fill', margin: '0 auto' }}
          alt={description}
          src={image}
        />
      }
    >
      <Meta title={title} />
      <Meta title={price} description={category} />
    </Card>
  );
};

export default ProductCard;
