import React from "react";
import {
  Badge,
  Button,
  Card,
  Group,
  useMantineTheme,
  Text,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { ProductDatum } from "common-lib/types";

import DOMPurify from "dompurify";

// import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: ProductDatum;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const theme = useMantineTheme();
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
          {product.images.map((image) => (
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
            {product.productName}
          </Text>
          <Text weight={500} size="lg" mr="sm">
            ₹ {product.price}
          </Text>
          {product.promotionText && (
            <Badge color="pink" variant="light">
              {product.promotionText}
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
            __html: DOMPurify.sanitize(product.description),
          }}
        />
      </Card.Section>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
