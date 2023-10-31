import { Route, Routes } from 'react-router-dom';
import Books from './component/books';
import Home from './component/home';
import Header from './component/header';
import Demo from './component/demo';
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
