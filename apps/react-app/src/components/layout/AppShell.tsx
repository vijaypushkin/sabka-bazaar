import React, { Suspense, useState } from "react";
import {
  AppShell as BaseAppShell,
  Header,
  Title,
  Flex,
  useMantineTheme,
  MediaQuery,
  Burger,
  Footer,
} from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AppShell: React.FC = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <BaseAppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Sidebar opened={opened} />}
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Title sx={{ marginRight: 24 }}>Sabka Bazaar</Title>
            </MediaQuery>
            <Flex
              mih={50}
              gap="md"
              justify="flex-start"
              align="center"
              direction="row"
            >
              <Link to="/">Home</Link>
              <Link to="/categories">Categories</Link>
            </Flex>
          </div>
        </Header>
      }
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </BaseAppShell>
  );
};

export default AppShell;
