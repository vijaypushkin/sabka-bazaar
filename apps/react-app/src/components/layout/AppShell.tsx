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
import AppBar from "./AppBar";

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
      // footer={
      //   <Footer height={60} p="md">
      //     Sabka Bazaar © 2023
      //   </Footer>
      // }
      header={<AppBar opened={opened} setOpened={setOpened} />}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </BaseAppShell>
  );
};

export default AppShell;
