import { Route, Routes } from 'react-router-dom';
import Book from './book';
import Home from './home';
import { AppShell } from '@mantine/core';


function App() {
    return (
        <>
            <AppShell
                header={{height: 60}}
            >
                <AppShell.Header>Header</AppShell.Header>
            </AppShell>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/book' element={<Book />} />
            </Routes>

        </>
    );
}

export default App;
