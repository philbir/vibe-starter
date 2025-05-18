import { Title, Text, Container, TextInput, Textarea, Button, Group, Paper, Stack, ThemeIcon } from "@mantine/core";
import { useForm, isEmail, isNotEmpty } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import Confetti from 'react-confetti';
import { useEffect } from 'react';

// Custom window size hook for confetti (Mantine 8 has no useWindowSize)
function useWindowSizeConfetti() {
  const [size, setSize] = useState(() => ({ width: window.innerWidth, height: window.innerHeight }));
  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}
import { IconCheck } from '@tabler/icons-react';

export function ContactPage() {
  // Always call hooks at the top level!
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState<{ name: string } | null>(null);
  const { width, height } = useWindowSizeConfetti();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Please enter a valid email'),
      message: isNotEmpty('Message is required'),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmittedValues({ name: values.name });
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Failed to send message. Please try again.',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
    setSubmittedValues(null);
  };

  if (isSubmitted && submittedValues) {
    // Responsive confetti using custom hook (values always available)
    return (
      <Container>
        {/* Confetti celebration! */}
        <Confetti width={width} height={height} numberOfPieces={250} recycle={false} tweenDuration={7000} />
        <Paper shadow="sm" p="xl" withBorder>
          <Stack align="center" gap="xl">
            <ThemeIcon size="xl" radius="xl" color="green">
              <IconCheck size={32} />
            </ThemeIcon>
            <Title order={2}>Thank You, {submittedValues.name}!</Title>
            <Text ta="center" size="lg">
              Your message has been successfully sent. We will get back to you soon.
            </Text>
            <Button onClick={handleNewMessage} variant="light">
              Send Another Message
            </Button>
          </Stack>
        </Paper>
      </Container>
    );
  }

  return (
    <Container>
      <Title order={1}>Contact</Title>
      <Text mt="md" mb="lg">Get in touch with us.</Text>
      <Paper shadow="sm" p="xl" withBorder>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Name"
            placeholder="Your name"
            required
            mb="md"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            required
            mb="md"
            type="email"
            {...form.getInputProps('email')}
          />
          <Textarea
            label="Message"
            placeholder="Your message"
            required
            minRows={4}
            mb="xl"
            {...form.getInputProps('message')}
          />
          <Group justify="flex-end">
            <Button type="submit" loading={loading}>Send Message</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
