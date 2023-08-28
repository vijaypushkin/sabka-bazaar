import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import AppShell from "./components/layout/AppShell";

import router from "./router";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell>
        <RouterProvider router={router} />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
