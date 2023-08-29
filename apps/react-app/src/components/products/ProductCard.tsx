import React from "react";
import {
  Badge,
  Button,
  Card,
  Group,
  useMantineTheme,
  Text,
  Flex,
  Paper,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { ProductDatum } from "common-lib/types";

import DOMPurify from "dompurify";
import { useAddProductToCart } from "../../graphql/queries/cart.mutations";

// import styles from './ProductCard.module.scss';

interface ProductCardProps {
  quantity?: number;
  product: ProductDatum;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const theme = useMantineTheme();
  const [addToCart, { loading }] = useAddProductToCart();

  const handleAddToCart = () => {
    addToCart({
      variables: {
        productId: props.product._id,
        quantity: 1,
      },
    });
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={300}>
      <Card.Section>
        <Carousel
          maw={320}
          mx="auto"
          withIndicators
          height={200}
          styles={{
            indicator: {
              backgroundColor: theme.colors.blue[4],
            },
          }}
        >
          {props.product.images.map((image) => (
            <Carousel.Slide
              key={image}
              style={{
                backgroundImage: `url(http://localhost:5500/static/${image})`,
              }}
            />
          ))}
        </Carousel>
      </Card.Section>

      <Card.Section h={300} maw={320} mx="auto" sx={{ overflow: "auto" }}>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500} w="100%">
            {props.product.productName}
          </Text>
          <Text weight={500} size="lg" mr="sm">
            ₹ {props.product.price}
          </Text>
          {props.product.promotionText && (
            <Badge color="pink" variant="light">
              {props.product.promotionText}
            </Badge>
          )}
        </Group>

        <Text
          size="sm"
          color="dimmed"
          sx={{
            overflow: "auto",
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.product.description),
          }}
        />
      </Card.Section>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={handleAddToCart}
        loading={loading}
        disabled={(props.quantity ?? 0) > 0}
      >
        {(props.quantity ?? 0) > 0 ? "Added to Cart" : "Add to Cart"}
      </Button>
    </Card>
  );
};

export default ProductCard;
