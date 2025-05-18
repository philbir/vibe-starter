import { AppShell } from "@mantine/core";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { Navigation } from "./Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {

  return (
    <AppShell
      header={{ height: 36 }}
      navbar={{ 
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: false }
      }}
      footer={{ height: 26 }}
      padding="md"
    >
      <AppShell.Header>
        <AppHeader />
      </AppShell.Header>
      
      <AppShell.Navbar w={180} p={0} m={0}>
        <Navigation />
      </AppShell.Navbar>
      
      <AppShell.Main>
        {children}
      </AppShell.Main>
      
      <AppShell.Footer p={0} m={0}>
        <AppFooter />
      </AppShell.Footer>
    </AppShell>
  );
}
