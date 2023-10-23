import { Route, Routes } from 'react-router-dom';
import Books from './books';
import Home from './home';
import { AppShell, Group } from '@mantine/core';


function App() {
    return (
       <AppShell
            padding="md"
            header={{height: 60}}
       >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <text>HEADER</text>
                </Group>
            </AppShell.Header>
            <AppShell.Main>main</AppShell.Main>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/books' element={<Books />} />
            </Routes> */}

       </AppShell>
    );
}

export default App;
