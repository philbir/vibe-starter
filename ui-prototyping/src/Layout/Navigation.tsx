import { NavLink, Stack, useMantineTheme } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconHome, IconAddressBook, IconServer, IconTestPipe } from '@tabler/icons-react';

interface NavigationItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export function Navigation() {
  const location = useLocation();
  const theme = useMantineTheme();

  const navigationItems: NavigationItem[] = [
    { label: "Home", path: "/", icon: <IconHome size={18} stroke={1.5} /> },
    { label: "MCP Server", path: "/mcp-server", icon: <IconServer size={18} stroke={1.5} /> },
    { label: "Testing", path: "/testing", icon: <IconTestPipe size={18} stroke={1.5} /> },
    { label: "Contact", path: "/contact", icon: <IconAddressBook size={18} stroke={1.5} /> },
  ];

  return (
    <Stack gap="xs" mt={4}>
      {navigationItems.map((item) => (
        <NavLink
          key={item.path}
          component={Link}
          color={theme.colors.blue[9]}
          to={item.path}
          label={item.label}
          leftSection={item.icon}
          active={location.pathname === item.path}
          variant="filled"
        />
      ))}
    </Stack>
  );
}
