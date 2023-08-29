import { Box, Button, Card, Image, Text, Title } from "@mantine/core";
import { ProductDatum } from "common-lib/types";
import React from "react";

// import styles from './CartItem.module.scss';

interface CartItemProps {
  id: string;
  data: ProductDatum;
  quantity: number;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  return (
    <Card shadow="sm" p={0} radius="md" mb="md" withBorder display="flex">
      <Box m="sm">
        <Image
          src={`http://localhost:5500/static/${props.data.images[0]}`}
          height={60}
        />
      </Box>
      <Box m="sm" sx={{ flex: 1 }}>
        <Title order={6}>{props.data.productName}</Title>
        <Text size="sm">₹ {props.data.price}</Text>
      </Box>

      <Box m="sm">
        <Text size="sm">Quantity: {props.quantity}</Text>
        <Button mt="md" color="red" onClick={props.onRemove}>
          Remove
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
