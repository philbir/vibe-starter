import { Group, Text, useMantineTheme, Menu, ActionIcon } from "@mantine/core";
import { IconIcons, IconRobot, IconSettings, IconLogout } from '@tabler/icons-react';

export function AppHeader() {

    var theme = useMantineTheme();
    return (
        <Group px="xs" style={{ height: '36px', backgroundColor: theme.colors.purple[9] }} justify="space-between" align="center">
            <Group gap="md">
                <Group gap="xs">
                    <IconIcons size={18} stroke={1.5} color={theme.colors.gray[1]} />
                    <Text fw={500} c={theme.colors.gray[1]}>Vibe starter Kit</Text>
                </Group>
            </Group>
            <Group gap="md">
                <Menu shadow="md" width={200} position="bottom-end">
                    <Menu.Target>
                        <ActionIcon 
                            variant="filled" 
                            radius="xl"
                            size="md"
                            color={theme.colors.purple[5]}
                            style={{ border: `1px solid ${theme.colors.gray[1]}` }}
                        >
                            <IconRobot size={18} stroke={1.5} color={theme.colors.gray[1]} />
                        </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item leftSection={<IconSettings size={14} />}>
                            Settings
                        </Menu.Item>
                        <Menu.Item leftSection={<IconLogout size={14} />} color="red">
                            Logout
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Group>
        </Group>
    );
}