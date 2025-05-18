import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from '@mantine/notifications';
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage";
import { ContactPage } from "./Pages/ContactPage";
import { MCPServerPage } from "./Pages/MCPServerPage";
import { TestingPage } from "./Pages/TestingPage";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <Router basename="/vibe-starter">
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mcp-server" element={<MCPServerPage />} />
            <Route path="/testing" element={<TestingPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </MantineProvider>
  );
}
