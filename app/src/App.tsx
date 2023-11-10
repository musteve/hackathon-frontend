import { Route, Routes } from 'react-router-dom';
import Books from './pages/books';
import Home from './pages/home';
import Header from './pages/header';
import Demo from './pages/demo';
import { AppShell } from '@mantine/core';
import Blogs from './pages/blogs';


function App() {
    return (
        <AppShell
            header={{height: 70}}
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>
            <AppShell.Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/books' element={<Books />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/demo" element={<Demo />} />
                </Routes>
            </AppShell.Main>
        </AppShell>
    )
}

export default App
