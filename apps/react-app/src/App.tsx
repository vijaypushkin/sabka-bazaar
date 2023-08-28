import { MantineProvider } from "@mantine/core";
import AppShell from "./components/layout/AppShell";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell>
        <div>Hello World</div>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
