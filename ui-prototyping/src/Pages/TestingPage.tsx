import { Container, Title, Text, List, Alert } from '@mantine/core';
import { IconInfoCircle, IconCheck } from '@tabler/icons-react';

export const TestingPage = () => {
  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="lg">
        Testing with Playwright MCP
      </Title>
      
      <Text mb="md">
        Playwright MCP (Model Context Protocol) allows you to write and execute automated tests using natural language. 
        Instead of writing traditional code-based tests, you can describe your test scenarios in plain English.
      </Text>

      <Title order={3} mb="md" mt="xl">
        Example Test Case
      </Title>

      <Text mb="md">
        Find example in <code>./test/contact-form.md</code>
      </Text>


      <Title order={3} mb="md">
        How It Works
      </Title>

      <List type="ordered" spacing="sm" mb="lg">
        <List.Item>
          <Text fw={500}>Natural Language Testing:</Text> Write your test scenarios in plain English, making them easy to understand and maintain.
        </List.Item>
        <List.Item>
          <Text fw={500}>MCP Server Integration:</Text> The MCP server interprets your natural language instructions and converts them into Playwright commands.
        </List.Item>
        <List.Item>
          <Text fw={500}>Automated Execution:</Text> Tests are executed automatically, simulating real user interactions with your application.
        </List.Item>
        <List.Item>
          <Text fw={500}>Assertions and Verification:</Text> Include assertions in natural language to verify expected outcomes.
        </List.Item>
      </List>

      <Text>
        This approach makes testing more accessible to team members without deep programming knowledge while maintaining the robustness of automated testing.
      </Text>

      <Alert 
        variant="light" 
        color="green" 
        mt="xl" 
        icon={<IconCheck />}
        title="Bonus"
      >
        The MCP Server can then generate a <code>spec.ts</code> test out of this scenario. 🤯
      </Alert>


      <Alert 
        variant="light" 
        color="blue" 
        mt="xl" 
        icon={<IconInfoCircle />}
        title="Performance Consideration"
      >
        While this natural language approach offers great accessibility and maintainability, it's important to note that 
        it is significantly slower than traditional Playwright tests written in code. Consider this trade-off when choosing 
        your testing approach, especially for performance-critical test suites.
      </Alert>
    </Container>
  );
};

export default TestingPage;
