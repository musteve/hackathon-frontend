import { Route, Routes } from 'react-router-dom';
import Books from './books';
import Home from './home';
import Header from './header';
import Demo from './demo';
import { AppShell } from '@mantine/core';


function App() {
    return (
        <AppShell
            header={{height: 40}}
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>
            <AppShell.Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/books' element={<Books />} />
                    <Route path="/demo" element={<Demo />} />
                </Routes>
            </AppShell.Main>
        </AppShell>
    )
}

export default App
