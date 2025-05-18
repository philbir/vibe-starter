import { Group, Text, useMantineTheme, ActionIcon, Anchor } from "@mantine/core";
import { IconBrandGithub } from '@tabler/icons-react';

export function AppFooter() {
  const theme = useMantineTheme();
  
  return (
    <Group 
      px="md" 
      style={{ 
        height: '26px', 
        backgroundColor: theme.colors.gray[1],
        width: '100%'
      }} 
      justify="space-between"
    >
      <Text size="xs" c={theme.colors.gray[6]}>
        © {new Date().getFullYear()} Vibe Starter
      </Text>
      <Anchor href="https://github.com/philbir/vibe-starter" target="_blank" rel="noopener noreferrer">
        <ActionIcon 
          variant="subtle"
          color={theme.colors.gray[6]}
          size="sm"
          aria-label="GitHub repository"
        >
          <IconBrandGithub size={16} stroke={1.5} />
        </ActionIcon>
      </Anchor>
    </Group>
  );
}