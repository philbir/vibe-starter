import { Title, Text, Container, List, ThemeIcon, Card, SimpleGrid, Button, Group } from "@mantine/core";
import {
    IconBrandGithub,
    IconWorld,
    IconBrowser,
    IconDeviceLaptop,
    IconCode,
    IconExternalLink
} from '@tabler/icons-react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useState, useEffect } from 'react';

// Import JSON files
import vsCodeConfigRaw from '../files/mcp-vscode.json';
import cursorConfigRaw from '../files/mcp-cursor.json';

export function MCPServerPage() {
    const [vsCodeConfigText, setVsCodeConfigText] = useState('');
    const [cursorConfigText, setCursorConfigText] = useState('');

    useEffect(() => {
        setVsCodeConfigText(JSON.stringify(vsCodeConfigRaw, null, 2));
        setCursorConfigText(JSON.stringify(cursorConfigRaw, null, 2));
    }, []);

    return (
        <Container fluid>
            <Title order={1}>Model Context Protocol (MCP) Servers 🔌</Title>
            <Text mt="md" size="lg">Enhance your Vibe coding experience with these MCP servers</Text>

            <Card shadow="sm" radius="md" withBorder mt="xl" p="xl">
                <Title order={2} mb="md">About MCP</Title>
                <Text>
                    The Model Context Protocol (MCP) is a standard for providing context to AI models during coding tasks.
                    It allows AI assistants to access information from servers to better understand your codebase and environment.
                </Text>
                <Text>
                    To configure MCP servers for your project, check the documentation for your AI coding assistant.
                    Most modern AI coding tools support MCP integration through plugins or configuration files.
                </Text>
            </Card>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
                <Card shadow="sm" radius="md" withBorder p="md">
                    <Title order={4} mb="md">
                        <ThemeIcon color="blue" size={28} radius="xl" mr="xs">
                            <IconCode style={{ width: '70%', height: '70%' }} />
                        </ThemeIcon>
                        VS Code Configuration
                    </Title>
                    <Text size="sm" mb="sm">Add to .vscode/mcp.json:</Text>
                    <CodeMirror
                        value={vsCodeConfigText}
                        height="300px"
                        extensions={[json()]}
                        theme="light"
                    />
                </Card>

                <Card shadow="sm" radius="md" withBorder p="md">
                    <Title order={4} mb="md">
                        <ThemeIcon color="teal" size={28} radius="xl" mr="xs">
                            <IconCode style={{ width: '70%', height: '70%' }} />
                        </ThemeIcon>
                        Cursor Configuration
                    </Title>
                    <Text size="sm" mb="sm">Add to ~/.cursor/mcp.json:</Text>
                    <CodeMirror
                        value={cursorConfigText}
                        height="300px"
                        extensions={[json()]}
                        theme="light"
                    />
                </Card>
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
                <Card shadow="sm" radius="md" withBorder p="xl">
                    <Group justify="space-between" mb="md">
                        <Title order={3}>
                            <ThemeIcon color="blue" size={28} radius="xl" mr="xs">
                                <IconWorld style={{ width: '70%', height: '70%' }} />
                            </ThemeIcon>
                            Context7
                        </Title>
                        <Button
                            component="a"
                            href="https://context7.com/"
                            target="_blank"
                            variant="subtle"
                            size="sm"
                            p={4}
                        >
                            <IconExternalLink size={16} />
                        </Button>
                    </Group>
                    <Text mb="md">
                        Context7 provides access to comprehensive documentation for thousands of libraries
                        and frameworks, enabling more accurate code suggestions.
                    </Text>
                    <List spacing="sm">
                        <List.Item>Access up-to-date technical documentation</List.Item>
                        <List.Item>Get code examples from official sources</List.Item>
                        <List.Item>Resolve obscure API questions with precision</List.Item>
                    </List>
                </Card>

                <Card shadow="sm" radius="md" withBorder p="xl">
                    <Group justify="space-between" mb="md">
                        <Title order={3} mb="md">
                            <ThemeIcon color="dark" size={28} radius="xl" mr="xs">
                                <IconBrandGithub style={{ width: '70%', height: '70%' }} />
                            </ThemeIcon>
                            GitHub
                        </Title>
                        <Button
                            component="a"
                            href="https://github.com/github/github-mcp-server"
                            target="_blank"
                            variant="subtle"
                            size="sm"
                            p={4}
                        >
                            <IconExternalLink size={16} />
                        </Button>
                    </Group>
                    <Text mb="md">
                        The GitHub MCP server connects your AI assistant directly to GitHub repositories,
                        issues, pull requests, and more.
                    </Text>
                    <List spacing="sm">
                        <List.Item>Search code across repositories</List.Item>
                        <List.Item>Create and manage issues and PRs</List.Item>
                        <List.Item>Review code changes with AI assistance</List.Item>
                        <List.Item>Track project progress through GitHub integrations</List.Item>
                    </List>
                </Card>

                <Card shadow="sm" radius="md" withBorder p="xl">
                    <Group justify="space-between" mb="md">
                        <Title order={3}>
                            <ThemeIcon color="orange" size={28} radius="xl" mr="xs">
                                <IconBrowser style={{ width: '70%', height: '70%' }} />
                            </ThemeIcon>
                            BrowserAgent
                        </Title>
                        <Button
                            component="a"
                            href="https://github.com/AgentDeskAI/browser-tools-mcp"
                            target="_blank"
                            variant="subtle"
                            size="sm"
                            p={4}
                        >
                            <IconExternalLink size={16} />
                        </Button>
                    </Group>
                    <Text mb="md">
                        BrowserAgent allows your AI assistant to interact with web content, automating browser
                        tasks and retrieving information from websites.
                    </Text>
                    <List spacing="sm">
                        <List.Item>Debug web applications with AI assistance</List.Item>
                        <List.Item>Analyze DOM structure and accessibility</List.Item>
                        <List.Item>Perform automated UI testing</List.Item>
                        <List.Item>Extract content from websites for development</List.Item>
                    </List>
                </Card>

                <Card shadow="sm" radius="md" withBorder p="xl">
                    <Group justify="space-between" mb="md">
                        <Title order={3}>
                            <ThemeIcon color="grape" size={28} radius="xl" mr="xs">
                                <IconDeviceLaptop style={{ width: '70%', height: '70%' }} />
                            </ThemeIcon>
                            Playwright
                        </Title>
                        <Button
                            component="a"
                            href="https://github.com/microsoft/playwright-mcp"
                            target="_blank"
                            variant="subtle"
                            size="sm"
                            p={4}
                        >
                            <IconExternalLink size={16} />
                        </Button>
                    </Group>
                    <Text mb="md">
                        Playwright MCP server enables end-to-end testing and browser automation through
                        AI-assisted coding with comprehensive browser support.
                    </Text>
                    <List spacing="sm">
                        <List.Item>Create robust end-to-end tests</List.Item>
                        <List.Item>Automate cross-browser testing scenarios</List.Item>
                        <List.Item>Generate testing code with AI assistance</List.Item>
                        <List.Item>Debug browser compatibility issues</List.Item>
                    </List>
                </Card>
            </SimpleGrid>

        </Container>
    );
}
