import { AppShell as BaseAppShell, Navbar, Header } from "@mantine/core";
import React, { Suspense } from "react";

const AppShell: React.FC<{ children: React.ReactElement }> = (props) => {
  return (
    <BaseAppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={"100%"} p="xs">
          <div>AppBar</div>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <div>Sabka Bazaar</div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
    </BaseAppShell>
  );
};

export default AppShell;