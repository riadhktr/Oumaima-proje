import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const PizzaCard = ({food}) =>{
  return(
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={`http://localhost:4000/public/${food.image}`} />}
    >
      <Meta title={food.title} description={food.description} />
    </Card>
  )
} 
export default PizzaCard;