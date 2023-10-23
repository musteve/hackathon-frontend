'use client';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Stack, Text } from '@mantine/core';
import { IconCalendarEvent } from '@tabler/icons-react';

export function BottomNavigation(): JSX.Element {
  return (
    <AppShell.Footer>
      <Group grow gap={0}>
        <Stack h={60} align='center' justify='center' gap={0}>
          <IconCalendarEvent />
          <Text
            size='xs'
          >
            Events
          </Text>
        </Stack>
        <Stack h={60} align='center' justify='center' gap={0}>
          <IconCalendarEvent />
          <Text
            size='xs'
          >
            Events
          </Text>
        </Stack>
        <Stack h={60} align='center' justify='center' gap={0}>
          <IconCalendarEvent />
          <Text
            size='xs'
          >
            Events
          </Text>
        </Stack>
      </Group>
    </AppShell.Footer>
  );
}

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>

      <BottomNavigation />
    </AppShell>
  );
}