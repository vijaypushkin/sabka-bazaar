import {
  Box,
  Burger,
  Button,
  Flex,
  Header,
  MediaQuery,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

interface AppBarProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppBar: React.FC<AppBarProps> = (props) => {
  const theme = useMantineTheme();

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
        component="nav"
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={props.opened}
            onClick={() => props.setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Title sx={{ marginRight: 24 }}>SabkaBazaar</Title>
        </MediaQuery>
        <Flex
          mih={50}
          gap="md"
          justify="space-between"
          align="center"
          direction="row"
          w="100%"
        >
          <Flex mih={50} gap="sx" align="center">
            <Link to="/">
              <Button variant="subtle" component="span">
                Home
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="subtle" component="span">
                Categories
              </Button>
            </Link>
          </Flex>

          <Link to="/cart">
            <Button variant="filled" component="span">
              Cart
            </Button>
          </Link>
        </Flex>
      </Box>
    </Header>
  );
};

export default AppBar;
