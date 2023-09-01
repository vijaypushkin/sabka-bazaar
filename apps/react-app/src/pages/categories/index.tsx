import { Box, Card, Divider, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { useGetCategoriesWithChildren } from "../../graphql/queries/categories.query";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const CategoriesPage: React.FC = () => {
  const { data } = useGetCategoriesWithChildren();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sabka Bazaar - Categories</title>
      </Helmet>
      <Title order={1}>Shop By</Title>

      {data?.categoriesWithChildren?.map((category) => (
        <Box key={category._id} mb="lg">
          <Divider
            my="xs"
            size="md"
            label={
              <Title ml={5} order={2}>
                {category.name}
              </Title>
            }
          />
          <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
          >
            {category.children?.map((child) => (
              <Link to={`/categories/${child.categoryID}`} key={child._id}>
                <Card key={child._id} withBorder shadow="sm">
                  <Card.Section p="md">
                    <Text size="lg">{child.name}</Text>
                  </Card.Section>
                </Card>
              </Link>
            ))}
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default CategoriesPage;
