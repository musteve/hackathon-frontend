import { Route, Routes } from 'react-router-dom';
import Books from './pages/books';
import Home from './pages/home';
import Header from './pages/header';
import Demo from './pages/demo';
import { AppShell } from '@mantine/core';
import Blogs from './pages/blogs';
import Vedeos from './pages/vedeos';
import { AuthProvider } from './context/auth-context';
import Curriculums from './pages/curriculums';
import Page404 from './pages/page404';


function App() {
    

    return (
        <AuthProvider>
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
                        <Route path="/vedeos" element={<Vedeos />} />
                        <Route path="/curriculums" element={<Curriculums />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </AppShell.Main>
            </AppShell>
        </AuthProvider>
    )
}

export default App
