import { Card } from 'antd';

import { IProduct } from '../../@types/product.types';

const { Meta } = Card;

const ProductCard = ({ id, title, price, category, description, image }: IProduct) => {
  return (
    <Card
      key={id}
      hoverable
      style={{ width: 230, padding: '0.4rem' }}
      cover={
        <img
          style={{ width: '80%', height: '11rem', objectFit: 'fill', margin: '0 auto' }}
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
