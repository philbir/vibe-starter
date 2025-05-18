import { Title, Text, Container, List, ThemeIcon, Card, SimpleGrid, Code, Button, Group } from "@mantine/core";
import { 
  IconBrandReact, 
  IconRouter, 
  IconBoxMultiple, 
  IconBrandVscode, 
  IconPointer, 
  IconCode,
  IconServer
} from '@tabler/icons-react';
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <Container fluid>
      <Title order={1}>Vibe Starter Kit 🚀</Title>
      <Text mt="md" size="lg">Use this to start your Vibe coding journey ✨</Text>
      
      <Card shadow="sm" radius="md" withBorder mt="xl" p="xl">
        <Title order={2} mb="md">Components Used 🛠️</Title>
        <List
          spacing="md"
          size="lg"
          center
        >
          <List.Item
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconBrandReact style={{ width: '70%', height: '70%' }} />
              </ThemeIcon>
            }
          >
            <Text fw={500}>React 19</Text>
            <Text size="sm" c="dimmed">The latest version with improved server components</Text>
          </List.Item>
          
          <List.Item
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconRouter style={{ width: '70%', height: '70%' }} />
              </ThemeIcon>
            }
          >
            <Text fw={500}>React Router</Text>
            <Text size="sm" c="dimmed">Client-side routing for seamless navigation</Text>
          </List.Item>
          
          <List.Item
            icon={
              <ThemeIcon color="grape" size={24} radius="xl">
                <IconBoxMultiple style={{ width: '70%', height: '70%' }} />
              </ThemeIcon>
            }
          >
            <Text fw={500}>MobX Store</Text>
            <Text size="sm" c="dimmed">Simple and scalable state management</Text>
          </List.Item>
          
          <List.Item
            icon={
              <ThemeIcon color="cyan" size={24} radius="xl">
                <IconCode style={{ width: '70%', height: '70%' }} />
              </ThemeIcon>
            }
          >
            <Text fw={500}>Mantine 8.0.0</Text>
            <Text size="sm" c="dimmed">Modern UI component library with 100+ customizable components</Text>
          </List.Item>
          
          <List.Item
            icon={
              <ThemeIcon color="yellow" size={24} radius="xl">
                <IconCode style={{ width: '70%', height: '70%' }} />
              </ThemeIcon>
            }
          >
            <Text fw={500}>Tabler Icons</Text>
            <Text size="sm" c="dimmed">Over 4,200 open-source free SVG icons</Text>
          </List.Item>
        </List>
      </Card>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
        <Card shadow="sm" radius="md" withBorder p="xl">
          <Title order={3} mb="md">
            <ThemeIcon color="indigo" size={28} radius="xl" mr="xs">
              <IconBrandVscode style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
            Visual Studio Code
          </Title>
          <List spacing="sm">
            <List.Item>Custom instructions provided in <Code>./github/custom.instructions.md</Code></List.Item>
          </List>

        </Card>

        <Card shadow="sm" radius="md" withBorder p="xl">
          <Title order={3} mb="md">
            <ThemeIcon color="orange" size={28} radius="xl" mr="xs">
              <IconPointer style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
            Cursor 
          </Title>
          <List spacing="sm">
            <List.Item>Cursor rules provided</List.Item>
          </List>
          <Text mt="md" size="sm" fs="italic">
            Remember to run <Code>npm run lint</Code> before commits
          </Text>
        </Card>
      </SimpleGrid>

      <Card shadow="sm" radius="md" withBorder mt="xl" p="xl" bg="gray.0">
        <Text ta="center" size="lg" fw={500}>
          Happy coding with Vibe! 🎉 Let's build something amazing together!
        </Text>
        
        <Group justify="center" mt="md">
          <Button
            variant="light"
            color="blue"
            leftSection={<IconServer size={16} />}
            component={Link}
            to="/mcp-server"
          >
            Explore MCP Servers
          </Button>
        </Group>
      </Card>
    </Container>
  );
}
